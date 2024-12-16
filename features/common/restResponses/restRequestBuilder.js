import { NextRequest, NextResponse } from "next/server";
import { badRequestErrorResponse } from "./badRequestErrorResponse";
import { badErrorRequestFromZodIssues } from "./badErrorRequestFromZodIssues";
import { internalServerErrorResponse } from "./internalServerErrorResponse";


class RestRequestValdationResult {
    constructor(success, validatedRequestBody, issues) {
        this.success = success;
        this.validatedRequestBody = validatedRequestBody;
        this.issues = issues;       
    }
}

class ValidatedRequestDetailsParams{
    constructor(validatedRequestBody, params) {
        this.validatedRequestBody = validatedRequestBody;
        this.params = params;
    }
}

export class RestRequestBuilderOptions {
    constructor(options) {
       
        this.onValidateParams = options.onValidateParams;
        this.onValidRequestAsync = options.onValidRequestAsync;
        this.params = options.params;
        this.validatedRequestBody = options.validatedRequestBody;
       

         
    }
   
  
   
  

    }
  
   


export function restRequestBuilder(reqOptions) {
    const options = new RestRequestBuilderOptions(reqOptions)
    console.log(options)
    return async function (req, params) {
        try {
        let isValidRequest= false
            let details= {
                validatedRequestBody: null,
                params: null
            };
            
            if (options.onValidateParams) {
                const { isValid, errorMessage } = options.onValidateParams;
                console.log(isValid)
                if (!isValid) {
                    if (errorMessage) {
                        return badRequestErrorResponse(errorMessage);
                    }
                    return badRequestErrorResponse("invalid params");
                }
                details.params = params;
            }
            if (options.onValidateRequestAsync) {
                const validation = await options.onValidateRequestAsync(req);
                if (!validation.success) {
                    const { issues } = validation;

                    return badRequestErrorResponseFromZodIssues(issues);
                } else {
                    details.validatedRequestBody = validation.validatedRequestBody;
                    isValidRequest = true;
                }
            } else {
                isValidRequest = true;
            }
            if (isValidRequest) {
                const response = await options.onValidRequestAsync(req, details);
                return response;
            } else {
                return badRequestErrorResponse();
            }
        } catch (error) {
            if (error instanceof Error) {
                return internalServerErrorResponse(error.message);
            }
            return internalServerErrorResponse();
        }
    }
}