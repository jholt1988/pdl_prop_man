import { createAppSlice } from './createAppSlice';
import { STATUS } from '../../utils/utils';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialState = {
  list: [],
  status: STATUS.IDLE,
  error: null,
};

const unitSlice = createAppSlice({
  name: 'units',
  initialState,
  reducers: (create) => ({
    addUnit: create.asyncThunk(
      async (data, thunkAPI) => {
        try {
          const unit = await prisma.unit.create({ data });
          return unit;
        } catch (error) {
          console.error(error);
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING;
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILED;
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS;
          state.list.push(action.payload);
        },
        settled: (state) => {
          state.status = STATUS.IDLE;
        },
      }
    ),
    removeUnit: create.asyncThunk(
      async (unitId, thunkAPI) => {
        try {
          await prisma.unit.delete({ where: { id: unitId } });
          return unitId;
        } catch (error) {
          console.error(error);
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING;
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILED;
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS;
          state.list = state.list.filter((unit) => unit.id !== action.payload);
        },
        settled: (state) => {
          state.status = STATUS.IDLE;
        },
      }
    ),
    updateUnit: create.asyncThunk(
      async (data, thunkAPI) => {
        try {
          const unit = await prisma.unit.update({
            where: { id: data.id },
            data,
          });
          return unit;
        } catch (error) {
          console.error(error);
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING;
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILED;
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS;
          const index = state.list.findIndex((unit) => unit.id === action.payload.id);
          if (index !== -1) {
            state.list[index] = action.payload;
          }
        },
        settled: (state) => {
          state.status = STATUS.IDLE;
        },
      }
    ),
    fetchUnits: create.asyncThunk(
      async (propertyId, thunkAPI) => {
        try {
          const units = await prisma.unit.findMany({
            where: {
              propertyId,
            },
          });
          return units;
        } catch (error) {
          console.error(error);
          return thunkAPI.rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING;
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILED;
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS;
          state.list = action.payload;
        },
        settled: (state) => {
          state.status = STATUS.IDLE;
        },
      }
    ),
  }),
});

export const { addUnit, removeUnit, updateUnit, fetchUnits } = unitSlice.actions;
export default unitSlice.reducer;
