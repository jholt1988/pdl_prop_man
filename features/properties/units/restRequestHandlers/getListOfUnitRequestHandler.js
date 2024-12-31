import { NextRequest } from "next/server";
import { prismaClient } from "../../../prisma/prismaClient";
import { unitResponse} from "../unitResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder"



const getListOfUnitsRequestOptions = {
    
    
        onValidRequestAsync: async (req) => {
            const units = await prismaClient.unit.findMany()

            return unitResponse(units)
        }
    

}

export const getListOfUnitRequestHandler =  restRequestBuilder(getListOfUnitsRequestOptions)


