import RestApplicationResponseModel from "./restApplicationResponseModel";
import { Vendor } from "../../vendors/vendorPayload";

export const vendorListResponseModel =  new RestApplicationResponseModel([new Vendor()], null); 