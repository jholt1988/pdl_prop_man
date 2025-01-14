import { NextRequest } from "next/server";
import { prismaClient } from "../../prisma/prismaClient";
import { transactionListResponse } from "../listOfTransactionsResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"



const getListOfTransactionsRequestOptions = {
    
    
        onValidRequestAsync: async (req) => {
            const transaction = await prismaClient.transaction.findMany()

            return transactionListResponse(transaction)
        }
    

}

export const getListOfTransactionsRequestHandler =  restRequestBuilder(getListOfTransactionsRequestOptions)


