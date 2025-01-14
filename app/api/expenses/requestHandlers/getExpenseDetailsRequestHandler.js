import { NextRequest } from "next/server";
import { prismaClient } from '../../../utils/prismaClient';
import { expenseDetailsResponse } from "../../../features/expenses/expenseDetailsResponse";
import { notFoundErrorResponse } from '../../../features/common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../features/common/restResponses/restRequestBuilder";
import { idParameterValidator } from "../../../utils/paramValidators";

const getExpenseDetailsRequestHandlerOptions = {
    onValidateParams: idParameterValidator,
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
        
                
                const id = details.params.id
            

                const expense = await prismaClient.expense.findFirst({
                    where: {
                        id: id
                    }
                })
                
                if (expense) {
                    return expenseDetailsResponse(expense)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new Error('Params were not defined')
            }
}
}
    


export const getExpenseDetailsRequestHandler = restRequestBuilder(getExpenseDetailsRequestHandlerOptions)
