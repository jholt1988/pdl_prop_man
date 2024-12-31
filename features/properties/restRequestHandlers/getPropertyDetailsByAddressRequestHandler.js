import { NextRequest } from "next/server";
import { prismaClient } from '../../prisma/prismaClient';
import { propertyListResponse } from "../listOfProperties";
import { notFoundErrorResponse } from '../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const getPropertyDetailsByAddressRequestHandlerOptions = {
    onValidateParams: () => { return { success: true, issues: [] } },
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const address = details.params.addtress
            

                const property = await prismaClient.property.findFirst({
                    where: {
                        address:address
                    }
                })
                
                if (property) {
                    return propertyListResponse(property)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getPropertyDetailsByAddressRequestHandler = restRequestBuilder(getPropertyDetailsByAddressRequestHandlerOptions)