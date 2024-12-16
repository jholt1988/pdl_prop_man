import { okResponse } from "../common/restResponses/okResponse";
import { Lease } from "./leasePayload";

export const leaseListResponse = (data) => {
    const leases = data.map(lease => new Lease(lease));
    return okResponse(leases);
}   