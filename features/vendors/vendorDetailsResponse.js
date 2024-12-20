import { okResponse } from "../common/restResponses/okResponse";
import { Vendor } from "./vendorPayload";

export const vendorDetailsResponse = (vendor) => {

    return okResponse(vendor);
}