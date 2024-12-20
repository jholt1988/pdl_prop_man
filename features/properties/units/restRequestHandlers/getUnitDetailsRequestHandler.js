import { NextRequest } from "next/server";
import { prismaClient } from '../../prisma/prismaClient';
import { unitResponse } from "../unitResponse";
import { notFoundErrorResponse } from '../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const getUnitDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const unit = await prismaClient.unit.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (unit) {
                    return unitResponse(unit)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getUnitDetailsRequestHandler = restRequestBuilder(getUnitDetailsRequestHandlerOptions)