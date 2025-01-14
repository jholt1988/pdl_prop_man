import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../utils/prismaClient";
import { NextResquest } from "next/server";
import { expenseDetailsResponse } from "../expenseDetailsResponse";
import { ExpenseCreateInputObjectSchema } from '../../../prisma/generated/schemas/ExpenseCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"

const createExpenseRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = ExpenseCreateInputObjectSchema.safeParse(requestBody)

            if (!validation.success) {
                const { errors } = validation.error
                return { success: false, issues: errors }
            } else {
                return {
                    success: true, validatedRequestBody: validation.data
                }
            }
        },
        onValidRequestAsync: async (req, details) => { 
            if(details && details.validatedRequestBody){
                
                const createArgs = { data: details.validatedRequestBody }



                const expense = await prismaClient.expense.create(createArgs)
                
            
                return expenseDetailsResponse(expense)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createExpenseRequestHandler = restRequestBuilder(createExpenseRequestHandlerOptions)
