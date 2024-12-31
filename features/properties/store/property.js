import { api } from "../../../store/slices/apiSlice";

export const propertyApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPropertyList: builder.query({
            query: () => ({
                url: `property`,
                method: "GET",
            
            }),
            providesTags: ["PropertyList"]
        }),
        getPropertyDetails: builder.query({
            query: ({ id }) => `property/${id}`,
            providesTags: ["Property"]
        }),
        createProperty: builder.mutation({
            query: (args) => ({
                url: `property`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["PropertyList"]
        }),
        updateProperty: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `property/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Property"]
        }),
        deleteProperty: builder.mutation({
            query: ({ id }) => ({
                url: `property/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Property"]
        }),
        getPropertyListWithUnits: builder.query({   
            query: (args) => ({
                url: `property/unit`,
                method: "GET"
            }),
            providesTags: ["PropertyList"]
        }),
        getPropertyDetailsByAddress: builder.query({
            query: ({ address }) => `property/${address}`,
            providesTags: ["Property"]
        }),
    })
})

export const {
    useGetPropertyListQuery,
    useGetPropertyDetailsQuery,
    useGetPropertyListWithUnitsQuery,
    useGetPropertyDetailsByAddressQuery,
    useCreatePropertyMutation,
    useUpdatePropertyMutation,
    useDeletePropertyMutation
} = propertyApi;

export const {
        getPropertyList,
        getPropertyDetails,
        createProperty,
        updateProperty,
        deleteProperty,
        getPropertyListWithUnits,
        getPropertyDetailsByAddress
    }
 = propertyApi.endpoints;

export const selectPropertyListResult= propertyApi.endpoints.getPropertyList.select();