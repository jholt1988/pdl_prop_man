import { NextRequest } from "next/server";
import { prismaClient } from '../../prisma/prismaClient';
import { tenantDetailsResponse } from "../restResponses/tenantDetailsResponse";
import { notFoundErrorResponse } from '../../common/restResponses/notFoundErrorResponse';
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder";

const getTenantDetailsRequestHandlerOptions = () => {
    const options = new RestRequestBuilderOptions({
        onValidRequestAsync: async (req, details) => {
            if (details && details.params) {
                const { params } = details.params
                const id =  params.id

                const tenant = prismaClient.tenant.findUnique({ where: { id } })
                
                if (tenant) {
                    return tenantDetailsResponse(tenant)
                } else {
                    return notFoundErrorResponse()
                }
            } else {
                throw new error('Params were not defined')
            }
        }
    })
}

export const getTenantRequestHandler = restRequestBuilder(getTenantDetailsRequestHandlerOptions)