import { okResponse } from "../restResponses/okResponse";

export const tenantPropertyLeaseListResponse = (leases) => {
    return okResponse(leases);
}