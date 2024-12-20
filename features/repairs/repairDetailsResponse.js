import { okResponse } from "../common/restResponses/okResponse";
import { RepairRequest } from "./repairRequestPayload";

export const repairDetailsResponse = (repair) => {
    return okResponse(repair);
}