import { okResponse } from "../common/restResponses/okResponse";
import { Transaction } from "./transactionPayload";

export const transactionListResponse = (data) => {
   
    return okResponse(data);
}