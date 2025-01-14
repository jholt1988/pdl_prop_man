import { restRequestBuilder } from "../restResponses/restRequestBuilder";
import { tenantListResponse } from "../../tenants/restResponses/tenantListResponse";
import { propertyListResponse } from "../../properties/listOfProperties";
import { leaseListResponse } from "../../leases/listOfLeasesResponse.js";
import { prismaClient } from "../../prisma/prismaClient";
import { tenantPropertyLeaseListResponse} from "../response/tenantPropertyLeaseListResponse"    ;
const tenantPropertyLeaseListRequestOptions = {
    onValidRequestAsync: async (req) => {
        const [tenants, properties, leases] = await prismaClient.$transaction([
            prismaClient.tenant.findMany(),
            prismaClient.property.findMany({
                include: {
                    units: true
                }
            }),
            prismaClient.lease.findMany(
                {
                    include: {
                        tenant: true,
                        property: true,
                        unit: true,
                        utilities: true
                    }
                }
            )
        ])
      
        return tenantPropertyLeaseListResponse({tenants:tenants, properties:properties, leases:leases})  }
    
}

export const tenantPropertyLeaseListRequestHandler = restRequestBuilder(tenantPropertyLeaseListRequestOptions)
 console.log(tenantPropertyLeaseListRequestHandler())