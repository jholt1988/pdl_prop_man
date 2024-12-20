import { okResponse } from "../common/restResponses/okResponse";
import { Property } from "./propertyPayload";

export const propertyListResponse = (data) => {

    return okResponse(data);
}