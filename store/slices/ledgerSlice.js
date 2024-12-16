import { createAppSlice } from './createAppSlice';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const initialState = {
  allTransactions: [],
  tenants: {},
  loading: false,
  error: null
};

const ledgerSlice = createAppSlice({
  name: 'ledger',
  initialState,
  reducers: create => ({
    addTransaction: create.asyncThunk(
      async ({ tenantId, transaction }) => {
        const newTransaction = await prisma.transaction.create({
          data: {
            ...transaction,
            tenantId
          }
        });
        return { tenantId, transaction: newTransaction };
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, { payload: { tenantId, transaction } }) => {
          state.allTransactions.push(transaction);
          if (!state.tenants[tenantId]) {
            state.tenants[tenantId] = { transactions: [], balance: 0 };
          }
          state.tenants[tenantId].transactions.push(transaction);
          state.tenants[tenantId].balance += transaction.amount;
          state.loading = false;
        }
      }
    ),

    deleteTransaction: create.asyncThunk(
      async ({ tenantId, transactionId }) => {
        await prisma.transaction.delete({
          where: { id: transactionId }
        });
        return { tenantId, transactionId };
      },
      {
        fulfilled: (state, { payload: { tenantId, transactionId } }) => {
          const tenantLedger = state.tenants[tenantId];
          if (tenantLedger) {
            const transaction = tenantLedger.transactions.find((t) => t.id === transactionId);
            if (transaction) {
              tenantLedger.balance -= transaction.amount;
              tenantLedger.transactions = tenantLedger.transactions.filter((t) => t.id !== transactionId);
            }
          }
          state.loading = false;
        }
      }
    ),

    updateTransaction: create.asyncThunk(
      async ({ tenantId, transaction }) => {
        const updatedTransaction = await prisma.transaction.update({
          where: { id: transaction.id },
          data: transaction
        });
        return { tenantId, transaction: updatedTransaction };
      },
      {
        fulfilled: (state, { payload: { tenantId, transaction } }) => {
          const tenantLedger = state.tenants[tenantId];
          if (tenantLedger) {
            const index = tenantLedger.transactions.findIndex((t) => t.id === transaction.id);
            if (index !== -1) {
              const oldAmount = tenantLedger.transactions[index].amount;
              tenantLedger.transactions[index] = transaction;
              tenantLedger.balance += transaction.amount - oldAmount;
            }
          }
          state.loading = false;
        }
      }
    )
  }),
  selectors: {
    selectAllTransactions: (state) => state.allTransactions,
    selectTenants: (state) => state.tenants,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error
  }
});

export const { addTransaction, deleteTransaction, updateTransaction } = ledgerSlice.actions;
export const { selectAllTransactions, selectTenants, selectLoading, selectError } = ledgerSlice.selectors;
export default ledgerSlice.reducer;
