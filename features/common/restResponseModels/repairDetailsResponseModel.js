import RestApplicationErrorResponseModel from "./restApplicationErrorResponseModel";
import { RepairRequest } from '../../repairs/repairRequestPayload';

export const repairDetailsResponseModel = new RestApplicationErrorResponseModel(new RepairRequest(), null);