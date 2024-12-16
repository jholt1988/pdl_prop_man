import { NextRequest } from "next/server";
import { prismaClient } from "../../prisma/prismaClient";
import { tenantListResponse } from "../restResponses/tenantListResponse";
import { Tenant } from "../tenantPayload";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"
import { isValid } from "zod";


const getListOfTenantsRequestOptions = {
    
        onValidateParams:{isValid: true, errorMessage: ""},
        onValidRequestAsync: async (req) => {
            const tenants = await prismaClient.tenant.findMany()

            return tenantListResponse(tenants)
        }
    

}

export const getListOfTenantsRequest =  restRequestBuilder(getListOfTenantsRequestOptions)


