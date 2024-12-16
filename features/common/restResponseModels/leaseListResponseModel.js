import RestApplicationResponseModel from "./restApplicationResponseModel";
import {Lease} from '../../leases/leasePayload';

export const leaseListResponseModel = new RestApplicationResponseModel([new Lease()] , null);