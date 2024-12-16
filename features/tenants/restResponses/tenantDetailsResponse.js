import { NextResponse } from "next/server";
import { Tenant } from "../tenantPayload";
import { okResponse } from "../../common/restResponses/okResponse";


export const tenantDetailsResponse = (tenant) => {
    if (tenant instanceof Tenant) {
        return okResponse(tenant);
    } else {
        return NextResponse.json(tenant, {
            status: 400
        });
    }
}