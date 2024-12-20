import { NextRequest } from "next/server";
import { prismaClient } from "../../prisma/prismaClient";
import { listOfVendorResponse } from "../listOfVendorResponse";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"



const getListOfVendorsRequestOptions = {
    
    
        onValidRequestAsync: async (req) => {
            const vendor = await prismaClient.vendor.findMany()

            return listOfVendorResponse(vendor)
        }
    

}

export const getListOfVendorsRequestHandler =  restRequestBuilder(getListOfVendorsRequestOptions)


