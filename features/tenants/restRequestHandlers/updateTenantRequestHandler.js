import { prismaClient } from "../../prisma/prismaClient";
import { NextRequest } from "next/server";
import { tenantDetailsResponse } from "../restResponses/tenantDetailsResponse";
import { TenantUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/TenantUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
const updateTenantRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        const validation = TenantUpdateInputObjectSchema.safeParse(requestBody)

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
                    const tenant = await prismaClient.tenant.update(updateArgs);
                    return tenantDetailsResponse(tenant);
                } catch (error) {
                    return { success: false, message: error.message };
                }
            } else {
                throw new Error('Validated request body was not defined');
            }
        }
 
    }


export const updateTenantRequestHandler = restRequestBuilder(updateTenantRequestHandlerOptions)