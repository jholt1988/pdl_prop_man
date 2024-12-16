import { combineReducers, configureStore,createListenerMiddleware, current } from "@reduxjs/toolkit";
import {  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist' 
import propertiesReducer from "./slices/propertiesSlice";
import tenantReducer from "./slices/tenantSlice";
import workOrderReducer from "./slices/repairSlice";
import leaseReducer from "./slices/leaseSlice";
import ledgerReducer from "./slices/ledgerSlice";
import expenseReducer from "./slices/expenseSlice";
import contractorReducer from "./slices/contractorSlice"; 
import unitReducer from "./slices/unitsSlice";
import paymentReducer from './slices/paymentsSlice'
import { api } from "./slices/apiSlice";
import storage from "./storage";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer;
// Infer the `RootState` type from the root r
// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.



const persistConfig ={
  key:'root',
  version: 1,
 storage
  
  
}

const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  properties: propertiesReducer,
  tenants: tenantReducer,
  workOrders: workOrderReducer,
  leases: leaseReducer,
  ledgers: ledgerReducer,
  expenses: expenseReducer,
  contractors: contractorReducer,
  units: unitReducer, 
  payments: paymentReducer
})

// const listenerMiddleware = createListenerMiddleware()/

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const persistedReducer =persistReducer(persistConfig, appReducer)

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
      }),
  })


}


// listenerMiddleware.startListening({
  
  

//   predicate: (_action,currentState, prevState) =>{

//     return currentState.tenants.list !== prevState.tenants.list
//   },
//   effect: async (_action, listenerApi) => {

//     listenerApi.cancelActiveListeners();
//     await listenerApi.delay(500)


//     const tenants = await Tenantload(listenerApi.getState().tenants.list)
//     console.log(tenants)
//     listenerApi.dispatch(fetchTenants())

//     return tenants
//   }

  
// },

// {

//   predicate:(_action,currentState,  prevState ) =>{
//     return currentState.properties.list !== prevState.properties.list
//   }, 
//   effect: async (_action, listenerApi) => {
//     listenerApi.cancelActiveListeners();
//     await listenerApi.delay(500)
  

//   const properties = await Propertyload(listenerApi.getState().properties.list)

//   listenerApi.dispatch(fetchProperties())




 
// Infer the return type of `makeStore`

