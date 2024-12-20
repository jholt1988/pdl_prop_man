import { NextResponse } from "next/server";
import { Tenant } from "../tenantPayload";
import { okResponse } from "../../common/restResponses/okResponse";


export const tenantDetailsResponse = (tenant) => {
    if (tenant) {
       
        return okResponse(tenant);
    } else {
        return NextResponse.json( {
            status: 400
        });
    }
}