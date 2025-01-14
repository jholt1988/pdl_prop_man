
import { prismaClient } from "../../prisma/prismaClient";
import { NextResquest } from "next/server";
import { leaseDetailsResponse } from "../leaseDetailsResponse";
import { LeaseCreateInputObjectSchema } from '../../../prisma/generated/schemas/objects/LeaseCreateInput.schema'
import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"
import { UtilitiesCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/UtilitiesCreateInput.schema";


// const createLeaseRequestHandlerOptions = {
   
//         onValidateRequestAsync: async (req) => {
//         const requestBody = await req.json()
//         console.log(requestBody) 
//         const validation = LeaseCreateInputObjectSchema.safeParse(requestBody)
//              console.log(validation)
//         if (validation.success) {
//             const { issues } = validation.error
//             return {
//                 success: false, issues: issues.map((issue) => {
//                     return {
//                         message: issue.message, path: issue.path[0], keys: issue.keys.map((key) => {
//                             return key
//                         })
                        
//                     }
//                 })
//             }
//         }
       
       
//                 return {
//                     success: true, validatedRequestBody: requestBody

//                 }
            
//         },
//         onValidRequestAsync: async (req, details) => { 
//             if(details && details.validatedRequestBody){
                
//                 const createLeaseArgs = {
//                     data:
//                     {
//                         details.validatedRequestBody.lease
// //                 }
                
// //                 const createUtilityArgs = { data: details.validatedRequestBody.utilities }



//                 // const [lease, utilities] = await prismaClient.$transaction([
//                 //     prismaClient.utilities.create(createUtilityArgs),
//                 //     prismaClient.lease.create(createLeaseArgs),
                    
//                 // ])
//                 const lease = await prismaClient.lease.create(createLeaseArgs)
            
//                 return leaseDetailsResponse(lease)
            
            
            
//             } else {
//                 throw new Error('Validated request body was not defined')
//             }
//         }
        

// }




async function createLeaseRequestHandler(req) {

        let lease
       
    try {
        const requestBody = await req.json()
        // Create Lease and connect related records
         lease = await prismaClient.lease.create({
            data: {
                termOfLease: requestBody.termOfLease,
                beginDate: new Date(requestBody.beginDate),
                endDate: new Date(requestBody.endDate),
                monthlyRent: Number(requestBody.monthlyRent),
                deposit: Number(requestBody.deposit),
                petDeposit: Number(requestBody.petDeposit),
                utilities: {
                    create: requestBody.utilities

                },

                // Connect existing tenant, property, and unit
                tenant: { connect: { id: Number(requestBody.tenant) } },
                property: { connect: { id: Number(requestBody.property) } },
                unit: { connect: { id: Number(requestBody.unit) } },

                // Create and connect utilities
               
            },
            include: {
                tenant: true,
                property: true,
                unit: true,
                utilities: true,
            },
        });
      
        return 
    } catch (error) {
        console.error("Error creating lease:", error.stack);
                        
    
    }
    return leaseDetailsResponse(lease);
}


export { createLeaseRequestHandler };
