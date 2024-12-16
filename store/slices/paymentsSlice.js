import { createAppSlice } from './createAppSlice';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const paymentSlice = createAppSlice({
  name: 'payments',
  initialState: {
    payments: [],
    status: 'idle',
    error: null,
  },
  reducers: create => ({
    fetchPaymentsByLease: create.asyncThunk(
      async (leaseId) => {
        const payments = await prisma.payment.findMany({
          where: { leaseId: leaseId }
        });
        return payments;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'success';
          state.payments = action.payload;
        },
        rejected: (state, action) => {
          state.status = 'error';
          state.error = action.error.message;
        },
        settled: (state) => {
          state.status = 'idle';
        }
      }
    ),

    postPayment: create.asyncThunk(
      async (data) => {
        const payment = await prisma.payment.create({
          data: {
            ...data
          }
        });
        return payment;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'success';
          state.payments.push(action.payload);
        },
        rejected: (state, action) => {
          state.status = 'error';
          state.error = `${action.error.message} : ${action.error.code}`;
        },
        settled: (state) => {
          state.status = 'idle';
        }
      }
    ),

    addPayment: create.reducer((state, action) => {
      state.payments.push(action.payload);
    })
  })
});

export const { addPayment, fetchPaymentsByLease, postPayment } = paymentSlice.actions;
export const selectPayments = state => state.payments.payments;
export default paymentSlice.reducer;
