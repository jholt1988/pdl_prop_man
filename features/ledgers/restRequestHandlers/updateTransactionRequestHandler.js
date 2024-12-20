import { prismaClient } from "../../prisma/prismaClient";
import { NextRequest } from "next/server";
import { TransactionUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TransactionUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
import { transactionDetailsResponse } from "../transactionDetailsResponse";
const updateTransactionRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        const validation = TransactionUpdateInputObjectSchema.safeParse(requestBody)

        if (!validation.success) {
            const { errors } = validation.error
            return { success: false, issues: errors }
        } else {
            return {
                success: true, validatedRequestBody: validation.data
            }
            
             
        }
    },

        onValidRequestAsync: async (req,details) => {
            if (details && details.params && details.validatedRequestBody) {
                const id = Number(details.params.params.id);

                const updateArgs = {
                    where: { id: id },
                    data: details.validatedRequestBody
                };

                try {
                    const transaction = await prismaClient.transaction.update(updateArgs);
                    return transactionDetailsResponse(transaction);
                } catch (error) {
                    return { success: false, message: error.message };
                }
            } else {
                throw new Error('Validated request body was not defined');
            }
        }
 
    }


export const updateTransactionRequestHandler = restRequestBuilder(updateTransactionRequestHandlerOptions)