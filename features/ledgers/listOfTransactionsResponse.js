import { okResponse } from "../common/restResponses/okResponse";
import { Transaction } from "./transactionPayload";

export const transactionListResponse = (data) => {
    const transactions = data.map(transaction => new Transaction(transaction));
    return okResponse(transactions);
}