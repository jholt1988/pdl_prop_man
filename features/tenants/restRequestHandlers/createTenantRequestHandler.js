import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { tenantDetailsResponse } from "../restResponses/tenantDetailsResponse";
import { TenantCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TenantCreateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"


const createTenantRequestHandlerOptions = () => {
    const options = new RestRequestBuilderOptions({
        onValidateRequestAsync: async (req) => {
            
                const requestBody = await req.json()
                const validation = TenantCreateInputObjectSchema.safeParse(requestBody)

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
                const createArgs = Prisma.TenantCreateArgs({
                    data: details.validatedRequestBody

                })

                const tenant = await prismaClient.tenant.create(createArgs)
                
                return tenantDetailsResponse(tenant)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        
    })
    return options
}

export const createTenantRequestHandler = restRequestBuilder(createTenantRequestHandlerOptions)