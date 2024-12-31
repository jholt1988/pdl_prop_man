
import { prismaClient } from "../../prisma/prismaClient";

import { tenantDetailsResponse } from "../restResponses/tenantDetailsResponse.js";
import { TenantCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TenantCreateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"


const createTenantRequestHandlerOptions = {
    
    
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation =TenantCreateInputObjectSchema.safeParse(requestBody)
        console.log(validation)
            if (!validation.success) {
                const { errors } = validation.error
                return { success: false, issues: errors }
            } else {
                return {
                    success: true, validatedRequestBody: validation.data
                }
        }

        
        },
    onValidRequestAsync: async (
        req, details) => { 
            if(details && details.validatedRequestBody){
                
                const createArgs = { data: details.validatedRequestBody }



                const tenant = await prismaClient.tenant.create(createArgs)
                
            
                return tenantDetailsResponse(tenant)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createTenantRequestHandler = restRequestBuilder(createTenantRequestHandlerOptions)