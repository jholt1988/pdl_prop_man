import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../utils/prismaClient";
import { noContentResponse } from "../../common/restResponses/noContentResponse";
import { ExpenseUpdateInputObjectSchema } from "../../../prisma/generated/schemas/ExpenseUpdateInput.schema";
import { NextResquest } from "next/server";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const deleteExpenseRequestHandlerOptions = {
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
        if (details && details.params) {
            const { params } = details.params;
            const id = Number(params.id);
            await prismaClient.expense.delete({ where: { id: id } });

            return noContentResponse();
        } else {
            throw new Error('Params were not defined');
        }
    }
};

export const deleteExpenseRequestHandler = restRequestBuilder(deleteExpenseRequestHandlerOptions);
