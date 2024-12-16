import { createAppSlice } from './createAppSlice';

import { STATUS } from '../../utils/utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const initialState = {
  list: [],
  selectedWorkOrder: {},
  status: STATUS[0],
  error: null,
};

const workOrderSlice = createAppSlice({
  name: 'workOrders',
  initialState: initialState,
  reducers: (create) => ({
    addWorkOrder: create.asyncThunk(
      async (action, thunkAPI) => {
        try {
          const newWorkOrder = await prisma.workOrder.create({
            data: action.payload,
          });
          return newWorkOrder;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        error: (state, action) => {
          state.status = STATUS[3];
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.list.push(action.payload);
        },
        settled: (state) => {
          state.status = STATUS[0];
        },
      }
    ),
    updateWorkOrderStatus: create.asyncThunk(
      async (action, thunkAPI) => {
        try {
          const updatedWorkOrder = await prisma.workOrder.update({
            where: { id: action.payload.id },
            data: { status: action.payload.status },
          });
          return updatedWorkOrder;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        error: (state, action) => {
          state.status = STATUS[3];
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          const index = state.list.findIndex((order) => order.id === action.payload.id);
          if (index !== -1) {
            state.list[index] = action.payload;
          }
        },
        settled: (state) => {
          state.status = STATUS[0];
        },
      }
    ),
    fetchWorkOrder: create.asyncThunk(
      async (thunkAPI) => {
        try {
          const workOrders = await prisma.workOrder.findMany();
          return workOrders;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        error: (state, action) => {
          state.status = STATUS[3];
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.list = action.payload;
        },
        settled: (state) => {
          state.status = STATUS[0];
        },
      }
    ),
  }),
});

export const { addWorkOrder, updateWorkOrderStatus, fetchWorkOrder } = workOrderSlice.actions;
export default workOrderSlice.reducer;
