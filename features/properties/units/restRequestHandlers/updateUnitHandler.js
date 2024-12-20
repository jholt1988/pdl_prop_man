import { prismaClient } from "../../prisma/prismaClient";
import { NextRequest } from "next/server";
import { UnitUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/UnitUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
import { unitResponse } from "../unitResponse";
const updateUnitRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
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

        onValidRequestAsync: async (req,details) => {
            if (details && details.params && details.validatedRequestBody) {
                const id = Number(details.params.params.id);

                const updateArgs = {
                    where: { id: id },
                    data: details.validatedRequestBody
                };

                try {
                    const unit = await prismaClient.unit.update(updateArgs);
                    return unitResponse(unit);
                } catch (error) {
                    return { success: false, message: error.message };
                }
            } else {
                throw new Error('Validated request body was not defined');
            }
        }
 
    }


export const updateUnitRequestHandler = restRequestBuilder(updateUnitRequestHandlerOptions)