import { NextRequest } from "next/server";
import { prismaClient } from "../../../utils/prismaClient";
import { listOfTransactionResponse } from "../../../features/ledgers/transactionResponses/listOfTransactionResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../../features/common/restResponses/restRequestBuilder"

const getListOfTransactionsRequestOptions = {
    onValidRequestAsync: async (req) => {
        const transaction = await prismaClient.transaction.findMany()
        return listOfTransactionResponse(transaction)
    }
}

export const getListOfTransactionsRequestHandler = restRequestBuilder(getListOfTransactionsRequestOptions)
