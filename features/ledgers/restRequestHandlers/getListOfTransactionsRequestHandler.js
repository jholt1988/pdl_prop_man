import { NextRequest } from "next/server";
import { prismaClient } from "../../prisma/prismaClient";
import { listOfTransactionResponse } from "../transactionResponses/listOfTransactionResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"



const getListOfTransactionsRequestOptions = {
    
    
        onValidRequestAsync: async (req) => {
            const transaction = await prismaClient.transaction.findMany()

            return listOfTransactionResponse(transaction)
        }
    

}

export const getListOfTransactionsRequestHandler =  restRequestBuilder(getListOfTransactionsRequestOptions)


