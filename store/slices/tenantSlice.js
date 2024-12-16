
import { createAppSlice, createReducer } from './createAppSlice';
import { STATUS } from '../../utils/utils';
import prismaClient from '../../utils/db';

const prisma = prismaClient;

const initialState = {
    tenantList:[], 
    selectedTenant:{}, 
    status:STATUS[0],
    error: null
}



const tenantSlice = createAppSlice({
  name: 'tenants',
  initialState,
  reducers: (create) => ({
    // Add tenant
    addTenant: create.asyncThunk(
      async (data) => {
        try {
          const tenant = await prisma.tenant.create({
            data: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
              ssn: data.ssn
            }
          });
          return tenant;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.tenantList.push(action.payload);
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Fetch tenants
    fetchTenants: create.asyncThunk(
      async () => {
        const tenants = await prisma.tenant.findMany();
        return tenants;
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.tenantList = action.payload;
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Edit tenant
    editTenant: create.asyncThunk(
      async (data) => {
        try {
          const updatedTenant = await prisma.tenant.update({
            where: { id: data.id },
            data: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
              ssn: data.ssn
            }
          });
          return updatedTenant;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          const index = state.tenantList.findIndex(
            tenant => tenant.id === action.payload.id
          );
          if (index !== -1) {
            state.tenantList[index] = action.payload;
          }
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Delete tenant
    deleteTenant: create.asyncThunk(
      async (id) => {
        try {
          await prisma.tenant.delete({
            where: { id }
          });
          return id;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS[1];
        },
        fulfilled: (state, action) => {
          state.status = STATUS[2];
          state.tenantList = state.tenantList.filter(
            tenant => tenant.id !== action.payload
          );
        },
        rejected: (state, action) => {
          state.status = STATUS[3];
          state.error = action.error.message;
        }
      }
    ),

    // Reset status
    settled: create.reducer((state) => {
      state.status = STATUS[0];
    })
  }),
  selectors: {
    selectTenants: (state) => state.tenantList,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error
  }
});
    

export const {
  settled,
  addTenant,
  editTenant,
  deleteTenant,
  fetchTenants
} = tenantSlice.actions;

export const {
  selectTenants,
  selectStatus,
  selectError
} = tenantSlice.selectors;

export default tenantSlice.reducer;