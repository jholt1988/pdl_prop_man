import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { leaseDetailsResponse } from "../../leases/leaseDetailsResponse";
import { notFoundErrorResponse } from '../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../utils/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const getLeaseDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const lease = await prismaClient.lease.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (lease) {
                    return leaseDetailsResponse(lease)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getLeaseDetailsRequestHandler = restRequestBuilder(getLeaseDetailsRequestHandlerOptions)
