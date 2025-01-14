import { okResponse } from "../common/restResponses/okResponse";
import { Lease } from "./leasePayload";

export const leaseListResponse = (leases) => {
    
    return okResponse(leases);
}   