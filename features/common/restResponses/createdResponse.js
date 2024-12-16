import { StatusCode } from 'status-code-enum';
import { NextResponse } from "next/server";
import RestApplicationResponseModel from '../restResponseModels/restApplicationResponseModel';

export function createdResponse(data) {
    const restResponse = new RestApplicationResponseModel(data, null);

    return NextResponse.json(restResponse, {
        status: StatusCode.SuccessCreated
    });
    
}