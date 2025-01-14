import { NextRequest } from "next/server";
import { prismaClient } from "../../../utils/prismaClient";
import { propertyListResponse } from "../../listOfProperties";

import { restRequestBuilder, RestRequestBuilderOptions } from "../../../common/restResponses/restRequestBuilder"

const getListOfPropertyRequestOptions = {
    onValidRequestAsync: async (req) => {
        const property = await prismaClient.property.findMany()
        return propertyListResponse(property)
    }
}

export const getListOfPropertiesRequest = restRequestBuilder(getListOfPropertyRequestOptions)
