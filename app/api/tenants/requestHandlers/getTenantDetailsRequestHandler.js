import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { tenantDetailsResponse } from "../../restResponses/tenantDetailsResponse";
import { notFoundErrorResponse } from '../../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../../utils/paramValidators";

const getTenantDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const tenant = await prismaClient.tenant.findFirst({
                    where: {
                        id: id
                    }
                })
                console.log(tenant)
                if (tenant) {
                    return tenantDetailsResponse(tenant)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getTenantRequestHandler = restRequestBuilder(getTenantDetailsRequestHandlerOptions)
