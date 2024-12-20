import { Prisma } from "@prisma/client";
import { unitResponse } from "../unitResponse";
import { UnitCreateInputObjectSchema } from '../../../prisma/generated/schemas/objects/UnitCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"

const createUnitRequestHandlerOptions = {
   
        onValidateRequestAsync: async (req) => {
         const requestBody = await req.json()
        const validation = UnitCreateInputObjectSchema.safeParse(requestBody)

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



                const unit = await prismaClient.unit.create(createArgs)
                
            
                return unitResponse(unit)
            
            
            
            } else {
                throw new Error('Validated request body was not defined')
            }
        }
        

}

export const createUnitRequestHandler = restRequestBuilder(createUnitRequestHandlerOptions)