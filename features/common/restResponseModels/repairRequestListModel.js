import RestApplicationErrorResponseModel from "./restApplicationErrorResponseModel";
import { RepairRequest } from '../../repairs/repairRequestPayload';

export const  repairListResponseModel = new RestApplicationErrorResponseModel([new RepairRequest()], null);