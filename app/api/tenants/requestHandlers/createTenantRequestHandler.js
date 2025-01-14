import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../utils/prismaClient";
import { NextResquest } from "next/server";
import { propertyDetailsResponse } from "../../restResponses/tenantDetailsResponse";
import { PropertyCreateInputObjectSchema } from "../../../../prisma/generated/schemas/objects/PropertyCreateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder"


const createPropertyRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = PropertyCreateInputObjectSchema.safeParse(requestBody)

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



                const property = await prismaClient.property.create(createArgs)
                
            
                return propertyDetailsResponse(property)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createTenantRequestHandler = restRequestBuilder(createPropertyRequestHandlerOptions)
