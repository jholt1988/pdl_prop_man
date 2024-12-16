import RestApplicationResponseModel from "./restApplicationResponseModel";
import { Expense } from 'features/expenses/expensePayload'; 

export const expenseDetailsResponseModel = new RestApplicationResponseModel(new Expense(), null);