import { error } from "@prisma/internals/dist/logger";
import { api } from "../../../store/slices/apiSlice";
import { arg } from "@prisma/internals";

export const tenantApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getTenantList: builder.query({
            query: () => ({
                url: `tenants`,
                method: "GET",
               
            }),
            providesTags: (result, error, arg) =>
                result
                    ? [...result.data.map(({ id }) => ({ type: "Tenants", id })), "Tenants"]
                    : ["Tenants"]
        }),
        getTenantDetails: builder.query({
            query: ({ id }) => `tenants/${id}`,
            providesTags: (result, error, arg) =>
                result
                    ? [...result.data.map(({ id }) => ([{ type: "Tenants", id },{type:"TenantList",id}])), "Tenants", "TenantList"]
                    : ["Tenants"]
        }),
        createTenant: builder.mutation({
            query: (args) => ({
                url: `tenants`,
                method: "POST",
                body: args
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Tenants", id: arg.id }, {type:"TenantList",id:arg.id}]
        }),
        updateTenant: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `tenants/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Tenants", id: arg.id }, {type:"TenantList",id:arg.id}]
        }),
        deleteTenant: builder.mutation({
            query: ({ id }) => ({
                url: `tenants/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Tenants", id: arg.id }, {type:"TenantList",id:arg.id}]
        })
    })
});
export const {
    useGetTenantListQuery,
    useGetTenantDetailsQuery,
    useCreateTenantMutation,
    useUpdateTenantMutation,
    useDeleteTenantMutation
} = tenantApi;

export const {
    endpoints: { getTenantList,
        getTenantDetails,
        createTenant,
        updateTenant,
        deleteTenant
    }
} = tenantApi;
