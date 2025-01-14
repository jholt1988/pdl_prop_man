import { okResponse } from "../common/restResponses/okResponse";
import { Lease } from "./leasePayload";

export const leaseDetailsResponse = (lease) => {
    return okResponse(lease);
}   