import { geVendorDetailsRequestHandler } from "../../../../features/vendors/restRequestHandlers/getVendorDetailsRequestHandler";
import { updateVendorRequestHandler } from "../../../../features/vendors/restRequestHandlers/updateVendorRequestHandler";
import { deleteVendorRequestHandler } from "../../../../features/vendors/restRequestHandlers/deleteVendorRequestHandler";

export {
    geVendorDetailsRequestHandler as GET,
    updateVendorRequestHandler as PUT,
    deleteVendorRequestHandler as DELETE
}