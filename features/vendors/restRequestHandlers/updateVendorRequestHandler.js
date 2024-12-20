import { prismaClient } from "../../prisma/prismaClient";
import { NextRequest } from "next/server";
import { VendorUpdateInputObjectSchema } from "../../../prisma/generated/schemas/objects/VendorUpdateInput.schema";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";
import {vendorDetailsResponse} from "../vendorDetailsResponse";
const updateVendorRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
    onValidateRequestAsync: async (req) => {
        const requestBody = await req.json()
        const validation = VendorUpdateInputObjectSchema.safeParse(requestBody)

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
                    const vendor = await prismaClient.vendor.update(updateArgs);
                    return vendorDetailsResponse(vendor);
                } catch (error) {
                    return { success: false, message: error.message };
                }
            } else {
                throw new Error('Validated request body was not defined');
            }
        }
 
    }


export const updateVendorRequestHandler = restRequestBuilder(updateVendorRequestHandlerOptions)