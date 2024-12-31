import { api } from "../../../store/slices/apiSlice";


export const transactionApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTransactionList: builder.query({
            query: (args) => ({
                url: `transaction`,
                method: "GET",
                params: args
            }),
            providesTags: ["TransactionList"]
        }),
        getTransactionDetails: builder.query({
            query: ({ id }) => `transaction/${id}`,
            providesTags: ["Transaction"]
        }),
        createTransaction: builder.mutation({
            query: (args) => ({
                url: `transaction`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["TransactionList"]
        }),
        updateTransaction: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `transaction/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Transaction"]
        }),
        deleteTransaction: builder.mutation({
            query: ({ id }) => ({
                url: `transaction/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Transaction"]
        })
    })
})

export const {
    useGetTransactionListQuery,
    useGetTransactionDetailsQuery,
    useCreateTransactionMutation,
    useUpdateTransactionMutation,
    useDeleteTransactionMutation
} = transactionApi;

export const {
    endpoints: { getTransactionList,
        getTransactionDetails,
        createTransaction,
        updateTransaction,
        deleteTransaction
    }
} = transactionApi;