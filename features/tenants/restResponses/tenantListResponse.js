import { NextResponse } from "next/server";
import { Tenant } from "../tenantPayload";
import { okResponse } from "../../common/restResponses/okResponse";

export const tenantListResponse = (tenants) => {
    return okResponse(tenants);
}