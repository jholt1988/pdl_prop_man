import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { vendorDetailsResponse } from "../vendorDetailsResponse";
import { VendorCreateInputObjectSchema } from '../../../prisma/generated/schemas/objects/VendorCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"

const createVendorRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = VendorCreateInputObjectSchema.safeParse(requestBody)

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



                const property = await prismaClient.vendor.create(createArgs)
                
            
                return vendorDetailsResponse(property)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createVendorRequestHandler = restRequestBuilder(createVendorRequestHandlerOptions)