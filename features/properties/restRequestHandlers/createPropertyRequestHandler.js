import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { NextRequest } from "next/server";
import { propertyDetailsResponse } from "../propertyDetailsResponse";
import { PropertyCreateWithoutRepairRequestInputObjectSchema } from '../../../prisma/generated/schemas/objects/PropertyCreateWithoutRepairRequestInput.schema'
import { restRequestBuilder } from "../../common/restResponses/restRequestBuilder"
import { UnitCreateManyInputObjectSchema } from '../../../prisma/generated/schemas/objects/UnitCreateManyInput.schema'

const createPropertyRequestHandlerOptions = {
   
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        const { name, address, numUnits } = requestBody;
        const parsedBody = { name, address, numUnits };
        
        const validation = PropertyCreateWithoutRepairRequestInputObjectSchema.safeParse(parsedBody)
        // const unitValidation = UnitCreateManyInputObjectSchema.safeParse(units)
     
        console.log("Validation:", validation)
        // console.log("Unit Validation:", unitValidation)

        if (!validation.success) {
            const { issues } = validation.error
            // const  unitIssues  = unitValidation.error.issues
         
            console.log("Issues:", issues)
        
           
            return {
                success: false, issues: issues.map((issue) => {
                    return {
                        message: issue.message, path: `${issue.path}`
                    }
                })
            }
        }
         else {
            return {
                success: true, validatedRequestBody:validation.data,      
            
            
            }
        }
    },

        onValidRequestAsync: async (req, details) => {
            if (details && details.validatedRequestBody) {
                
                const createArgs = {
                    data: {
                        ...details.validatedRequestBody,
                    }
                }

                console.log("Create Args:", createArgs)

                const property = await prismaClient.property.create(createArgs)
                 
                
                
                return propertyDetailsResponse(property)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

    }


export const createPropertyRequestHandler = restRequestBuilder(createPropertyRequestHandlerOptions)