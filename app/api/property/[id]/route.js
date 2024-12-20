import { updatePropertyRequestHandler } from "../../../../features/properties/restRequestHandlers/updatePropertyRequestHandler";
import { deletePropertyRequestHandler } from "../../../../features/properties/restRequestHandlers/deletePropertyRequestHandler";
import { getPropertyDetailsRequestHandler } from "../../../../features/properties/restRequestHandlers/getPropertyDetailsRequestHandler";

export {
    updatePropertyRequestHandler as PUT,
    deletePropertyRequestHandler as DELETE,
    getPropertyDetailsRequestHandler as GET
}