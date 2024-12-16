import { createAppSlice } from './createAppSlice';

import { STATUS } from '../../utils/utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialState = {
  transactions: [],
  totalIncome: 0,
  totalExpenses: 0,
  status: STATUS[0],
  error: null
};

const expenseSlice = createAppSlice({
  name: 'expenses',
  initialState,
  reducers: (create) => ({
    // Reset status
    settled: create.reducer((state) => {
      state.status = STATUS[0];
    }),

    // Add transaction
    addTransaction: create.asyncThunk(
      async (data) => {
        const transaction = await prisma.transaction.create({
          data: {
            type: data.type,
            amount: data.amount,
            description: data.description,
            date: data.date
          }
        });
        return transaction;
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.transactions.push(action.payload);
          if (action.payload.type === 'income') {
            state.totalIncome += action.payload.amount;
          } else if (action.payload.type === 'expense') {
            state.totalExpenses += action.payload.amount;
          }
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Delete transaction
    deleteTransaction: create.asyncThunk(
      async (id) => {
        await prisma.transaction.delete({
          where: { id }
        });
        return id;
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          const transactionIndex = state.transactions.findIndex(t => t.id === action.payload);
          if (transactionIndex >= 0) {
            const transaction = state.transactions[transactionIndex];
            if (transaction.type === 'income') {
              state.totalIncome -= transaction.amount;
            } else if (transaction.type === 'expense') {
              state.totalExpenses -= transaction.amount;
            }
            state.transactions.splice(transactionIndex, 1);
          }
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Fetch all transactions
    fetchTransactions: create.asyncThunk(
      async () => {
        const transactions = await prisma.transaction.findMany();
        return transactions;
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.transactions = action.payload;
          state.totalIncome = action.payload
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
          state.totalExpenses = action.payload
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    )
  }),
  selectors: {
    selectTransactions: (state) => state.transactions,
    selectTotalIncome: (state) => state.totalIncome,
    selectTotalExpenses: (state) => state.totalExpenses,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error
  }
});

export const {
  settled,
  addTransaction,
  deleteTransaction,
  fetchTransactions
} = expenseSlice.actions;

export const {
  selectTransactions,
  selectTotalIncome,
  selectTotalExpenses,
  selectStatus,
  selectError
} = expenseSlice.selectors;

export default expenseSlice.reducer;