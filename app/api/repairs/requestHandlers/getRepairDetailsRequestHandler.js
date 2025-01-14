import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { repairDetailsResponse } from "../../repairDetailsResponse";
import { notFoundErrorResponse } from '../../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../../utils/paramValidators";

const getRepairDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const repair = await prismaClient.repairRequest.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (repair) {
                    return repairDetailsResponse(repair)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getRepairDetailsRequestHandler = restRequestBuilder(getRepairDetailsRequestHandlerOptions)
