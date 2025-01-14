import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { transactionDetailsResponse } from "../../transactions/transactionDetailsResponse";
import { notFoundErrorResponse } from '../../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../../utils/paramValidators";

const getTransactionDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const transaction = await prismaClient.transaction.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (transaction) {
                    return transactionDetailsResponse(transaction)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const geTransactionDetailsRequestHandler = restRequestBuilder(getTransactionDetailsRequestHandlerOptions)
