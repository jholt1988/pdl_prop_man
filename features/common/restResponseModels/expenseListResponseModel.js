import RestApplicationResponseModel from "./restApplicationResponseModel";
import { ExpensePayload } from "../../expenses/expensePayload";

export const expenseListResponseModel = new RestApplicationResponseModel([new ExpensePayload()] , )