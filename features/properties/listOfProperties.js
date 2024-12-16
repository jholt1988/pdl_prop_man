import { okResponse } from "../common/restResponses/okResponse";
import { Property } from "./propertyPayload";

export const propertyListResponse = (data) => {
    const properties = data.map(property => new Property(property));
    return okResponse(properties);
}