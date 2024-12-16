import { Tenant } from "../../tenants/tenantPayload";
import RestApplicationResponseModel from "./restApplicationResponseModel";


export const tenantDetailsResponseModel  =  new RestApplicationResponseModel(new Tenant(), null);