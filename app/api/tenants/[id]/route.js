import { getTenantRequestHandler } from "../../../../features/tenants/restRequestHandlers/getTenantDetailsRequestHandler";
import { updateTenantRequestHandler } from "../../../../features/tenants/restRequestHandlers/updateTenantRequestHandler";
import { deleteTenantRequestHandler } from "../../../../features/tenants/restRequestHandlers/deleteTenantRequestHandler";

export {
    getTenantRequestHandler as GET,
    updateTenantRequestHandler as PUT,
    deleteTenantRequestHandler as DELETE
}