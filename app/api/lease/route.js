import  {createLeaseRequestHandler}  from "../../../features/leases/restRequestHandler/createLeaseRequestHandler";
import { getListOfLeasesRequest } from "../../../features/leases/restRequestHandler/getListOfLeasesRequestHandler";
import { tenantPropertyLeaseListRequestHandler } from "../../../features/common/restRequestHandlers/tenantPropertyLeaseListRequestHandler";

export {
    createLeaseRequestHandler as POST,
    tenantPropertyLeaseListRequestHandler as GET
}