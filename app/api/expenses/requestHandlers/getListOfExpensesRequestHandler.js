import { prismaClient } from "../../../../utils/prismaClient";
import { expenseListResponseModel } from "../../../../features/common/restResponseModels/expenseListResponseModel";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../../features/common/restResponses/restRequestBuilder";

const getListOfExpensesRequestHandlerOptions = {
  onValidRequestAsync: async (req) => {
    const expenses = await prismaClient.expense.findMany();
    return expenseListResponseModel(expenses);
  },
};

export const getListOfExpensesRequestHandler = restRequestBuilder(getListOfExpensesRequestHandlerOptions);
