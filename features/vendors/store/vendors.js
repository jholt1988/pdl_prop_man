import { api } from "../../../store/slices/apiSlice";

export const vendorApi = api.injectEndpoints({
    
    endpoints: (builder) => ({
        getVendorList: builder.query({
            query: (args) => ({
                url: `vendor`,
                method: "GET",
                params: args
            }),
            providesTags: ["VendorList"]
        }),
        getVendorDetails: builder.query({
            query: ({ id }) => `vendor/${id}`,
            providesTags: ["Vendor"]
        }),
        createVendor: builder.mutation({
            query: (args) => ({
                url: `vendor`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["VendorList"]
        }),
        updateVendor: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `vendor/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Vendor"]
        }),
        deleteVendor: builder.mutation({
            query: ({ id }) => ({
                url: `vendor/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Vendor"]
        })
    })
});

export const {
    useGetVendorListQuery,
    useGetVendorDetailsQuery,
    useCreateVendorMutation,
    useUpdateVendorMutation,
    useDeleteVendorMutation
} = vendorApi;

export const {
    endpoints: { getVendorList,
        getVendorDetails,
        createVendor,
        updateVendor,
        deleteVendor
    }
} = vendorApi;  