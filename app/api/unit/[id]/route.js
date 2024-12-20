import { getUnitDetailsRequestHandler } from "../../../../features/properties/units/restRequestHandlers/getUnitDetailsRequestHandler";
import { updateUnitRequestHandler } from "../../../../features/properties/units/restRequestHandlers/updateUnitRequestHandler";  
import { deleteUnitRequestHandler } from "../../../../features/properties/units/restRequestHandlers/deleteUnitRequestHandler";  

export {    
    getUnitDetailsRequestHandler as GET,
    updateUnitRequestHandler as PUT,
    deleteUnitRequestHandler as DELETE
}