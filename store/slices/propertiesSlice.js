import { createAppSlice } from './createAppSlice';
import { STATUS } from '../../utils/utils';
import { PrismaClient } from '@prisma/client';
import { api } from './apiSlice';
import { createSelector } from '@reduxjs/toolkit';
import { selectPropertyListResult } from "../../features/properties/store/property";

const prisma = new PrismaClient();


const initialState = {
    list: [], 
    status:STATUS[0], 
    error:null, 
   
}

const emptyPropertyList = [];

export const selectAllProperties = createSelector(selectPropertyListResult, (propertyList) => {
  return propertyList?.data ?? emptyPropertyList;
});

// const propertySlice = createAppSlice({
//   name: 'properties',
//   initialState: initialState,
//   reducers: (create) => ({
//     addProperty: create.asyncThunk(
//       async (data, thunkAPI) => {
//         try {
//           const newProperty = await prisma.property.create({
//             data: data,
//           });
//           return thunkAPI.fulfillWithValue(newProperty);
//         } catch (error) {
//           console.log(error);
//           return thunkAPI.rejectWithValue(error);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS.LOADING;
//         },
//         rejected: (state, action) => {
//           state.status = STATUS.FAILED;
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.status = STATUS.SUCCESS;
//           state.list.push(action.payload);
//         },
//         settled: (state) => {
//           state.status = STATUS.IDLE;
//         },
//       }
//     ),
//     removeProperty: create.asyncThunk(
//       async (id, thunkAPI) => {
//         try {
//           await prisma.property.delete({
//             where: { id: id },
//           });
//           return thunkAPI.fulfillWithValue(id);
//         } catch (error) {
//           console.log(error);
//           return thunkAPI.rejectWithValue(error);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS.LOADING;
//         },
//         rejected: (state, action) => {
//           state.status = STATUS.FAILED;
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.status = STATUS.SUCCESS;
//           state.list = state.list.filter((property) => property.id !== action.payload);
//         },
//         settled: (state) => {
//           state.status = STATUS.IDLE;
//         },
//       }
//     ),
//     updateProperty: create.asyncThunk(
//       async (data, thunkAPI) => {
//         try {
//           const updatedProperty = await prisma.property.update({
//             where: { id: data.id },
//             data: data,
//           });
//           return thunkAPI.fulfillWithValue(updatedProperty);
//         } catch (error) {
//           console.log(error);
//           return thunkAPI.rejectWithValue(error);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS.LOADING;
//         },
//         rejected: (state, action) => {
//           state.status = STATUS.FAILED;
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.status = STATUS.SUCCESS;
//           const index = state.list.findIndex((property) => property.id === action.payload.id);
//           if (index !== -1) {
//             state.list[index] = action.payload;
//           }
//         },
//         settled: (state) => {
//           state.status = STATUS.IDLE;
//         },
//       }
//     ),
//     fetchProperties: create.asyncThunk(
//       async (_, thunkAPI) => {
//         try {
//           const properties = await prisma.property.findMany();
//           return properties;
//         } catch (error) {
//           console.log(error);
//           return thunkAPI.rejectWithValue(error);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS.LOADING;
//         },
//         rejected: (state, action) => {
//           state.status = STATUS.FAILED;
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.status = STATUS.SUCCESS;
//           state.list = action.payload;
//         },
//         settled: (state) => {
//           state.status = STATUS.IDLE;
//         },
//       }
//     ),
//   }),
// });

// export const { addProperty, removeProperty, updateProperty, fetchProperties } = propertySlice.actions;
// export default propertySlice.reducer;
