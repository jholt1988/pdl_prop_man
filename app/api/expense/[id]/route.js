import { getExpenseDetailsRequestHandler } from "../../../../features/expenses/restRequestHandlers/getExpenseDetailsRequestHandler";
import { updateExpenseRequestHandler } from "../../../../features/expenses/restRequestHandlers/updateExpenseRequestHandler";
import { deleteExpenseRequestHandler } from "../../../../features/expenses/restRequestHandlers/deleteExpenseRequestHandler";

export {
    getExpenseDetailsRequestHandler as GET,
    updateExpenseRequestHandler as PUT,
    deleteExpenseRequestHandler as DELETE
}
