import { okResponse } from "../common/restResponses/okResponse";
import { Transaction } from "./transactionPayload";

export const transactionDetailsResponse = (transaction) => {
    return okResponse(new Transaction(transaction));
}