import { ZodIssue } from 'zod';
import { badRequestErrorResponse } from './badRequestErrorResponse';

export const badErrorRequestFromZodIssues = (issues) => { 
    if (issues) {
        const additionalDetails = " ";
        issues.forEach(issue => { 
            if (issue.code === "invalid_union") {
                const { unionErrors } = issue;
                if(unionErrors) {
                    unionErrors.forEach(unionError => {
                        if (unionError) {
                            unionError.issues.forEach(issue => {
                                const errorMessageString = `${issue.message} for ${issue.path.join(".")}`;
                                if (!additionalDetails.includes(errorMessageString)) {
                                    additionalDetails.push(`${issue.message} for ${issue.path.join(".")}`);
                                }
                            });
                        };
                });
            } else {
                const errorMessageString = `${issue.message} for ${issue.path.join(".")}`;
                if (!additionalDetails.includes(errorMessageString)) {
                    additionalDetails.push(`${issue.message} for ${issue.path.join(".")}`);
                }
            }
            }
        });

        return badRequestErrorResponse(additionalDetails.join(". "));
    } else {
        return badRequestErrorResponse();
    }
}