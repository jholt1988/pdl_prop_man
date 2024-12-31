
import { api } from "../../../store/slices/apiSlice";
import { expenseDetailsResponse } from "../expenseDetailsResponse";
import { expenseListResponse } from "../expenseListResponse";

export const expenseApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getExpenseList: builder.query({
            query: (args) => ({
                url: `expense`,
                method: "GET",
                params: args
            }),
            providesTags: ["ExpenseList"]
        }),
        getExpenseDetails: builder.query({
            query: ({ id }) => `expense/${id}`,
            providesTags: ["Expense"]
        }),
        createExpense: builder.mutation({
            query: (args) => ({
                url: `expense`,
                method: "POST",
                body: args
            }),
            invalidatesTags: ["ExpenseList"]
        }),
        updateExpense: builder.mutation({
            query: ({ id, ...args }) => ({
                url: `expense/${id}`,
                method: "PUT",
                body: args
            }),
            invalidatesTags: ["Expense"]
        }),
        deleteExpense: builder.mutation({
            query: ({ id }) => ({
                url: `expense/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Expense"]
        })
    })
});

export const {
    useGetExpenseListQuery,
    useGetExpenseDetailsQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
    useDeleteExpenseMutation
} = expenseApi;


export const {
    endpoints: { getExpenseList,
        getExpenseDetails,
        createExpense,
        updateExpense,
        deleteExpense
    }
} = expenseApi;