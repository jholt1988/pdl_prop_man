import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { tenantDetailsResponse } from "../restResponses/tenantDetailsResponse";
import { TenantUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TenantCreateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";

const updatetRequestHandlerOptions = () => {
    const options = new RestRequestBuilderOptions({
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
            if (details && details.params, details.validatedRequestBody) {
                const id = Number(details.params.params.id)

                const updateArgs = new Prisma.TenantUpdateArgs({
                    where: { id: id },
                    data: details.validatedRequestBody

                })

                const tenant = await prismaClient.tenant.update(updateArgs)
                
                return tenantDetailsResponse(tenant)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        
    })
    return options
}

export const updateTenantRequestHandler = restRequestBuilder(updatetRequestHandlerOptions)