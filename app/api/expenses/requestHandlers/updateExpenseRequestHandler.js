import { prismaClient } from "../../../utils/prismaClient";
import { NextRequest } from "next/server";
import { ExpenseUpdateInputObjectSchema } from "../../../prisma/generated/schemas/ExpenseUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
import { expenseDetailsResponse } from "../expenseDetailsResponse";

const updateExpenseRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json();
        const validation = ExpenseUpdateInputObjectSchema.safeParse(requestBody);

        if (!validation.success) {
            const { errors } = validation.error;
            return { success: false, issues: errors };
        } else {
            return {
                success: true, validatedRequestBody: validation.data
            };
        }
    },

    onValidRequestAsync: async (req, details) => {
        if (details && details.params && details.validatedRequestBody) {
            const id = Number(details.params.params.id);

            const updateArgs = {
                where: { id: id },
                data: details.validatedRequestBody
            };

            try {
                const expense = await prismaClient.expense.update(updateArgs);
                return expenseDetailsResponse(expense);
            } catch (error) {
                return { success: false, message: error.message };
            }
        } else {
            throw new Error('Validated request body was not defined');
        }
    }
};

export const updateExpenseRequestHandler = restRequestBuilder(updateExpenseRequestHandlerOptions);
