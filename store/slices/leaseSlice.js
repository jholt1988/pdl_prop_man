// import { STATUS } from '../../utils/utils';
// import { createAppSlice } from './createAppSlice';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const initialState = {
//   leases: [],
//   status: STATUS['IDLE'],
//   error: null,
// };

// const leaseSlice = createAppSlice({
//   name: 'leases',
//   initialState: initialState,
//   reducers: (create) => ({
//     addLease: create.asyncThunk(
//       async (data, thunkAPI) => {
//         try {
//           const lease = await prisma.lease.create({
//             data: data,
//           });
//           return lease;
//         } catch (err) {
//           console.log(err);
//           return thunkAPI.rejectWithValue(err);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS['LOADING'];
//         },
//         rejected: (state, action) => {
//           state.status = STATUS['FAILED'];
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.leases.push(action.payload);
//           state.status = STATUS['SUCCESS'];
//         },
//         settled: (state) => {
//           state.status = STATUS['IDLE'];
//         },
//       }
//     ),
//     removeLease: create.asyncThunk(
//       async (id, thunkAPI) => {
//         try {
//           await prisma.lease.delete({
//             where: { id: id },
//           });
//           return id;
//         } catch (err) {
//           console.log(err);
//           return thunkAPI.rejectWithValue(err);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS['LOADING'];
//         },
//         rejected: (state, action) => {
//           state.status = STATUS['FAILED'];
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.leases = state.leases.filter((lease) => lease.id !== action.payload);
//           state.status = STATUS['SUCCESS'];
//         },
//         settled: (state) => {
//           state.status = STATUS['IDLE'];
//         },
//       }
//     ),
//     updateLease: create.asyncThunk(
//       async (data, thunkAPI) => {
//         try {
//           const lease = await prisma.lease.update({
//             where: { id: data.id },
//             data: data,
//           });
//           return lease;
//         } catch (err) {
//           console.log(err);
//           return thunkAPI.rejectWithValue(err);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS['LOADING'];
//         },
//         rejected: (state, action) => {
//           state.status = STATUS['FAILED'];
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           const index = state.leases.findIndex((lease) => lease.id === action.payload.id);
//           if (index !== -1) {
//             state.leases[index] = action.payload;
//           }
//           state.status = STATUS['SUCCESS'];
//         },
//         settled: (state) => {
//           state.status = STATUS['IDLE'];
//         },
//       }
//     ),
//     fetchLeases: create.asyncThunk(
//       async (_, thunkAPI) => {
//         try {
//           const leases = await prisma.lease.findMany();
//           return leases;
//         } catch (err) {
//           console.log(err);
//           return thunkAPI.rejectWithValue(err);
//         }
//       },
//       {
//         pending: (state) => {
//           state.status = STATUS['LOADING'];
//         },
//         rejected: (state, action) => {
//           state.status = STATUS['FAILED'];
//           state.error = action.payload ?? action.error;
//         },
//         fulfilled: (state, action) => {
//           state.leases = action.payload;
//           state.status = STATUS['SUCCESS'];
//         },
//         settled: (state) => {
//           state.status = STATUS['IDLE'];
//         },
//       }
//     ),
//   }),
//   selectors: ({
//     selectLease: (state) => state.leases
//   }
//   ),
// });

// export const { addLease, removeLease, updateLease, fetchLeases } = leaseSlice.actions;
// export const { selectLease } = leaseSlice.selectors;
// export default leaseSlice.reducer;
