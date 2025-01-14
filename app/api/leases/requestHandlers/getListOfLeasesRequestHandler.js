import { NextRequest } from "next/server";
import { prismaClient } from "../../../utils/prismaClient";
import { leaseListResponse } from "../../../features/leases/listOfLeasesResponse";
import { restRequestBuilder, RestRequestBuilderOptions } from "../../../features/common/restResponses/restRequestBuilder";

const getListOfLeaseRequestOptions = {
    onValidRequestAsync: async (req) => {
        const lease = await prismaClient.lease.findMany();
        return leaseListResponse(lease);
    }
};

export const getListOfLeasesRequest = restRequestBuilder(getListOfLeaseRequestOptions);
