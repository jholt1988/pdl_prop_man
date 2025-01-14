import { NextRequest } from "next/server";
import { prismaClient } from "../../../utils/prismaClient";
import { repairListResponse } from "../../repairListResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder"

const getListOfRepairsRequestOptions = {
        onValidRequestAsync: async (req) => {
            const repairs = await prismaClient.repairRequest.findMany()
            return repairListResponse(repairs)
        }
}

export const getListOfRepairsRequestHandler =  restRequestBuilder(getListOfRepairsRequestOptions)
