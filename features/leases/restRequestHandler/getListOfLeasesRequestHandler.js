import { NextRequest } from "next/server";
import { prismaClient } from "../../prisma/prismaClient";
import { leaseListResponse } from "../listOfLeasesResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"



const getListOfLeaseRequestOptions = {
    
    
        onValidRequestAsync: async (req) => {
            const lease = await prismaClient.lease.findMany()

            return leaseListResponse(lease)
        }
    

}

export const getListOfLeasesRequest =  restRequestBuilder(getListOfLeaseRequestOptions)


