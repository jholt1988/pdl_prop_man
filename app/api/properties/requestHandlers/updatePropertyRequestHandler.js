import { prismaClient } from "../../../utils/prismaClient";
import { NextRequest } from "next/server";
import  { PropertyUpdateInputObjectSchema } from "../../../../prisma/generated/schemas/objects/PropertyUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
import { propertyDetailsResponse } from "../../propertyDetailsResponse";
const updatePropertyRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        const validation = PropertyUpdateInputObjectSchema.safeParse(requestBody)

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
                    const property = await prismaClient.property.update(updateArgs);
                    return propertyDetailsResponse(property);
                } catch (error) {
                    return { success: false, message: error.message };
                }
            } else {
                throw new Error('Validated request body was not defined');
            }
        }
 
    }


export const updatePropertyRequestHandler = restRequestBuilder(updatePropertyRequestHandlerOptions)
