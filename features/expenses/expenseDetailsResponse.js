import { okResponse } from '../common/restResponses/okResponse'
import { Expense } from './expensePayload' 


export const expenseDetailsResponse = (expense) => {
    return okResponse(new Expense(expense));
}