import { api } from "../../../../store/slices/apiSlice";

export const unitApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUnitList: builder.query({
            query: (args) => ({
                url: `unit`,
                method: "GET",
            }),
            providesTags: ["UnitList"]
        }),
        getUnitDetails: builder.query({
            query: ({ id }) => `unit/${id}`,
            providesTags: ["Unit"]
        }),
        createUnit: builder.mutation({
            query: (args) => ({
                url: `unit`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["UnitList"]
        }),
        updateUnit: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `unit/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Unit"]
        }),
        deleteUnit: builder.mutation({
            query: ({ id }) => ({
                url: `unit/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Unit"]
        })
    })
});

export const {
    useGetUnitListQuery,
    useGetUnitDetailsQuery,
    useCreateUnitMutation,
    useUpdateUnitMutation,
    useDeleteUnitMutation
} = unitApi;

export const {
    endpoints: { getUnitList,
        getUnitDetails,
        createUnit,
        updateUnit,
        deleteUnit
    }
} =
unitApi;