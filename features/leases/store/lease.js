import { api } from "../../../store/slices/apiSlice";

export const leaseApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getLeaseList: builder.query({
            query: (args) => ({
                url: `lease`,
                method: "GET",
                params: args
            }),
            providesTags: ["LeaseList"]
        }),
        getLeaseDetails: builder.query({
            query: ({ id }) => `lease/${id}`,
            providesTags: ["Lease"]
        }),
        createLease: builder.mutation({
            query: (args) => ({
                url: `lease`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["LeaseList"]
        }),
        updateLease: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `lease/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Lease"]
        }),
        deleteLease: builder.mutation({
            query: ({ id }) => ({
                url: `lease/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Lease"]
        }),
        createUtilities: builder.mutation({
            query: ({ args }) => ({
                url: `lease/utilities`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["Lease"]
        }),
    })
})

export const {
    useGetLeaseListQuery,
    useGetLeaseDetailsQuery,
    useCreateLeaseMutation,
    useUpdateLeaseMutation,
    useDeleteLeaseMutation,
    useCreateUtilitiesMutation
} = leaseApi;   

export const {  
    endpoints: { getLeaseList,
        getLeaseDetails,
        createLease,
        updateLease,
        deleteLease,
        createUtilities
    }
} = leaseApi;