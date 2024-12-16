import { Tenant } from "../../tenants/tenantPayload";
import RestApplicationResponseModel from "./restApplicationResponseModel";

export const tenantListResponseModel  =  new RestApplicationResponseModel([new Tenant()], null);