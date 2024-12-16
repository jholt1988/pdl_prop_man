import { StatusCode } from 'status-code-enum';
import { NextResponse } from "next/server";
import RestApplicatioErrorResponseModel from '../restResponseModels/restApplicationErrorResponseModel';
import RestApplicationResponseModel from '../restResponseModels/restApplicationResponseModel';

export function restErrorResponseBuilder(initalMessage, statusCode) {
    return function (addtionalDetails) {
        let finalMessage = initalMessage;
        if (addtionalDetails) {
            finalMessage = `${initalMessage}: ${addtionalDetails}`;
        }
        const errorMessage = new RestApplicatioErrorResponseModel(finalMessage);
        const restResponse = new RestApplicationResponseModel(null, errorMessage);

        return NextResponse.json(restResponse, {
            status: statusCode
        });
    }
    
}