import RestApplicationResponseModel from "./restApplicationResponseModel";
import { Transaction } from "../../ledgers/transactionPayload";

export const transactionListResponseModel = new RestApplicationResponseModel([new Transaction()], null);