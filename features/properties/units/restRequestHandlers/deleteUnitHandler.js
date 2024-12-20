import { Prisma } from "@prisma/client";
import { prismaClient } from "../../prisma/prismaClient";
import { noContentResponse } from "../../common/restResponses/noContentResponse";
import { UnitUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/UnitUpdateInput.schema";
import { NextResquest } from "next/server";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
const deleteUnitRequestHandlerOptions = {
    onValidateParams:idParameterValidator,
        onValidateRequestAsync: async (req) => {
            
                const requestBody = await req.json()
                const validation = UnitUpdateInputObjectSchema.safeParse(requestBody)

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
            if (details && details.params) {
                const {params} = details.params
                const id = Number(params.id)
              await prismaClient.unit.delete({where: {id: id}})
                
                return noContentResponse()
            
            
            
            } else {
                throw new Error('Params were not defined')
            }
        }
        
   
}

export const deleteUnitRequestHandler = restRequestBuilder(deleteUnitRequestHandlerOptions)