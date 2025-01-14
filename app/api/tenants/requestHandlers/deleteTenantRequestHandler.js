import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../utils/prismaClient";
import { noContentResponse } from "../../../common/restResponses/noContentResponse";
import { NextResquest } from "next/server";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";

const deleteTenantRequestHandlerOptions = {
        onValidateRequestAsync: async (req) => {
            
                const requestBody = await req.json()
                const validation = TenantUpdateInputObjectSchema.safeParse(requestBody)

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
            if (details && details.params) {
                const {params} = details.params
                const id = Number(params.id)
              await prismaClient.tenant.delete({where: {id: id}})
                
                return noContentResponse()
            
            
            
            } else {
                throw new Error('Params were not defined')
            }
        }
        
   
}

export const deleteTenantRequestHandler = restRequestBuilder(deleteTenantRequestHandlerOptions)
