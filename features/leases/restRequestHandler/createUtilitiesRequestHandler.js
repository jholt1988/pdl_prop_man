import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { leaseDetailsResponse } from "../leaseDetailsResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"

const createUtilitiesRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation ={success:true, issues: []}

        if (!validation.success) {
            const { issues } = validation.error
            return {
                success: false, issues: issues.map((issue) => {
                    return {
                        message: issue.message, path: issue.path[0], keys: issue.keys
                        
                    }
                })
            }
        } else {
                return {
                    success: true, validatedRequestBody: validation.data
                }
            }
        },
        onValidRequestAsync: async (req, details) => { 
            if(details && details.validatedRequestBody){
                
                const createArgs = { data: details.validatedRequestBody }



                const lease = await prismaClient.utilities.create(createArgs)
                
            
                return leaseDetailsResponse(lease)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createUtilitiesRequestHandler = restRequestBuilder(createUtilitiesRequestHandlerOptions)