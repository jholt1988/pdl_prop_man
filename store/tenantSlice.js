
import { createAppSlice } from './createAppSlice';
import {STATUS} from '../lib/utils';
import axios from 'axios';




const tenants = [
    {
      id:1, 
      firstName: "John",
      lastName:"Doe",
      phone: "555-123-4567",
      email: "john.doe@example.com",
      ssn:"555555555",
      dob:"07/27/1996"
    },
    {
      id:2,
      firstName: "Jane",
      lastName: "Smith",
      phone: "555-234-5678",
      email: "jane.smith@example.com",
     ssn:"333333333",
     dob:"12/24/1990"
    },
    {
      id:3,
      firstName: "Michael",
      lastName:"Brown", 
      phone: "555-345-6789",
      email: "michael.brown@example.com",
      ssn:"222222222", 
      dob:"01/09/1990"
    },
    {
      id:4,
      firstName: "Emily",
      lastName:"Johnson",
      phone: "555-456-7890",
      email: "emily.johnson@example.com",
      ssn:"111111111",
      dob:"07/11/1988"
    },
    {
      id:5,
      firstName: "David",
      lastName: "Wilson",
      phone: "555-567-8901",
      email: "david.wilson@example.com",
      ssn:"00000000",
      dob:"07/11/1988"
    }
  ];
  

const initialState = {
    tenantList:tenants, 
    selectedTenant:{}, 
    status:STATUS[0],
    error: null
}


const tenantSlice = createAppSlice({
  name: 'tenants',  
  initialState: initialState,
  reducers: (create) =>  ({
    addTenant: create.asyncThunk(
      
      async (data ,thunkAPI) => { 
      console.log(data)
         try{
          const response = await axios.post('/api/tenants/',data)
          console.log(response)
          return response.data
         }catch(err){
          return err.response.data
         }
        },
    {
        pending:(state) => {
          state.status = STATUS[1]
        }, 
      rejected:(state, action) => {
        state.status = STATUS[3]
        state.error = action.payload ?? action.error
      }, 
       fulfilled: (state, action) => {
        state.status = STATUS[2]
        state.tenantList.push(action.payload)
         }, 
         settled: (state, action) => {
          state.status = STATUS[0]
         }  
        }),
    removeTenant: (state, action) => {
      return state.tenantList.filter(tenant => tenant.id !== action.payload);
    },
    updateTenant: (state, action) => {
      const index = state.tenantList.findIndex(tenant => tenant.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    fetchTenants: create.asyncThunk(
      async ( thunkAPI) => {
        const response = await axios.get('/api/tenants')
        console.log(response)
        return (response.data)
      }, 
      {
        pending: (state) => {
          state.status = STATUS[1]
        }, 
        rejected: (state, action) => {
           state.status = STATUS[3]
           state.error = action.payload ?? action.error
        }, 
        fulfilled: (state, action) => {
          state.status = STATUS[2]
          state.tenantList= action.payload.rows
        },
        settled: (state, action) => {
          state.status = STATUS[0]
        }
      })
    }), 
    selectors:{
      selectTenants: (state) => state.tenantList
    }
  })
  
  
      
      
      
      
  

export const {addTenant, removeTenant, fetchTenants} = tenantSlice.actions

export const {selectTenants} = tenantSlice.selectors
export default tenantSlice.reducer