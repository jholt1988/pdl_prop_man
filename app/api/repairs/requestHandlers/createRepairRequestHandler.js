import { Prisma } from "@prisma/client";
import { prismaClient } from "../../../utils/prismaClient";
import { NextResquest } from "next/server";
import { repairDetailsResponse } from "../../repairDetailsResponse";
import { RepairRequestCreateInputObjectSchema } from '../../../../prisma/generated/schemas/objects/RepairRequestCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder"

const createRepairRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = RepairRequestCreateInputObjectSchema.safeParse(requestBody)

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



                const repair = await prismaClient.repairRequest.create(createArgs)
                
            
                return repairDetailsResponse(repair)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createRepairRequestHandler = restRequestBuilder(createRepairRequestHandlerOptions)
