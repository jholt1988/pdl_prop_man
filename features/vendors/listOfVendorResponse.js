import { okResponse } from "../common/restResponses/okResponse";
import { Vendor } from "./vendorPayload";

export const listOfVendorResponse = (data) => {

    const vendors = data.map(vendor => new Vendor(vendor));
    return okResponse(vendors);
}

