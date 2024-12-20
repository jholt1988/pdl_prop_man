import { NextRequest } from "next/server";
import { prismaClient } from '../../prisma/prismaClient';
import { vendorDetailsResponse } from "../vendorDetailsResponse";
import { notFoundErrorResponse } from '../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const getVendorDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const vendor = await prismaClient.vendor.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (vendor) {
                    return vendorDetailsResponse(vendor)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const geVendorDetailsRequestHandler = restRequestBuilder(getVendorDetailsRequestHandlerOptions)