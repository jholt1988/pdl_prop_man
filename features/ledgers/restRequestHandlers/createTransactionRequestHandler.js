import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { transactionDetailsResponse } from "../transactionDetailsResponse";
import { TransactionCreateInputObjectSchema } from '../../../prisma/generated/schemas/objects/TransactionCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"

const createTransactionRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = TransactionCreateInputObjectSchema.safeParse(requestBody)

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



                const property = await prismaClient.transaction.create(createArgs)
                
            
                return transactionDetailsResponse(property)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createTransactionRequestHandler = restRequestBuilder(createTransactionRequestHandlerOptions)