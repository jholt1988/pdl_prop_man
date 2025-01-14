import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { propertyListResponse } from "../../listOfProperties";
import { notFoundErrorResponse } from '../../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../../utils/paramValidators";

const getPropertyDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const property = await prismaClient.property.findFirst({
                    where: {
                        id: id
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
    


export const getPropertyDetailsRequestHandler = restRequestBuilder(getPropertyDetailsRequestHandlerOptions)
