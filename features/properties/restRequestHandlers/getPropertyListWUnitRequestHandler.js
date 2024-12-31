import { prismaClient } from "../../prisma/prismaClient";
import { propertyListResponse } from "../listOfProperties";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../common/restResponses/restRequestBuilder"



const getListOfPropertyWithUnitsRequestOptions = {


    onValidRequestAsync: async (req) => {
        const property = await prismaClient.property.findMany({
            include: {
                units: true
            }
        })

        return propertyListResponse(property)
    }


}

export const getListOfPropertiesWithUnitsRequest = restRequestBuilder(getListOfPropertyWithUnitsRequestOptions)
