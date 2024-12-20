import { getLeaseDetailsRequestHandler } from "../../../../features/leases/restRequestHandler/getLeaseDetailsRequestHandler";
import { updateLeaseRequestHandler } from "../../../../features/leases/restRequestHandler/updateLeaseRequestHandler";
import { deleteLeaseRequestHandler } from "../../../../features/leases/restRequestHandler/deleteLeaseRequestHandler";

export {
    getLeaseDetailsRequestHandler as GET,
    updateLeaseRequestHandler as PUT,
    deleteLeaseRequestHandler as DELETE
}