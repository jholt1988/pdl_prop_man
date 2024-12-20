import { okResponse } from "../common/restResponses/okResponse";
import { RepairRequest } from "./repairRequestPayload";

export const repairListResponse = (repairs) => {
    
    return okResponse(repairs);

}