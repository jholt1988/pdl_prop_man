import { okResponse } from "../common/restResponses/okResponse";
import { RepairRequest } from "./repairRequestPayload";

export const repairListResponse = (data) => {
    const repairs = data.map(repair => new RepairRequest(repair));
    return okResponse(repairs); 

