import { okResponse } from "../common/restResponses/okResponse";
import { Vendor } from "./vendorPayload";

export const listOfVendorResponse = (vendors) => {

    return okResponse(vendors);
}

