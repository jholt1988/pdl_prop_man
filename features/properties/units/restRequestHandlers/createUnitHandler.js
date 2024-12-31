import  { prismaClient } from '../../../../features/prisma/prismaClient'
import { unitResponse } from "../unitResponse";
import { UnitCreateManyInputObjectSchema } from '../../../../prisma/generated/schemas/objects/UnitCreateManyInput.schema'
import { restRequestBuilder } from "../../../common/restResponses/restRequestBuilder"

const createUnitRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        console.log("Request Body:", requestBody)
        const validation = UnitCreateManyInputObjectSchema.safeParse(requestBody)
console.log("Validation:", validation)
            if (!validation.success) {
                const issues = validation.error.issues.map((issue) => { 
                    return { message: issue.message, path: `${issue.path}`.toString() }
                })
                return { success: false, issues }
            } else {
                return {
                    success: true, validatedRequestBody: validation.data
                }
            }
        },
        onValidRequestAsync: async (req, details) => { 
            if(details && details.validatedRequestBody){
                
                const createArgs = { data: details.validatedRequestBody }



                const unit = await prismaClient.unit.create(createArgs)
                
            
                return unitResponse(unit)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createUnitRequestHandler = restRequestBuilder(createUnitRequestHandlerOptions)