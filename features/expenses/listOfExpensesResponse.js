import { okResponse } from '../common/restResponses/okResponse'
import { Expense } from './expensePayload' 


export const expenseListResponse = (data) => {
    const expenses = data.map(expense => new Expense(expense));
    return okResponse(expenses);
}