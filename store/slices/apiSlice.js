import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axiosBaseQuery from 'axiosBaseQuery'

 export const  api = createApi({
     reducerPath: 'api',
     refetchOnFocus: true,
     refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
     baseQuery: fetchBaseQuery({ baseUrl: "api" }),
    tagTypes: ['Tenants', 'TenantList', 'Property', 'PropertyList', 'Unit', 'UnitList', 'Lease', 'LeaseList'],        
    endpoints: () => ({})
})