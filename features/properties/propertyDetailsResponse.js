import { okResponse } from "../common/restResponses/okResponse";
import { Property } from "./propertyPayload";

export const propertyDetailsResponse = (property) => {
    return okResponse(property);
}   
