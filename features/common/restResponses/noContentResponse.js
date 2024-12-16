import { StatusCode } from 'status-code-enum';
import { NextResponse } from "next/server";

export function noContentResponse() {
    const nextResponse = new NextResponse(null, {
        status: StatusCode.SuccessNoContent
    });

    return nextResponse;
}