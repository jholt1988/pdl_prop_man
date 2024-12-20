import { getRepairDetailsRequestHandler } from "../../../../features/repairs/restRequestHandlers/getRepairDetailsRequestHandler";
import { updateRepairRequestHandler } from "../../../../features/repairs/restRequestHandlers/updateRepairRequestHandler";
import { deleteRepairRequestHandler } from "../../../../features/repairs/restRequestHandlers/deleteRepairRequestHandler";


export {
    getRepairDetailsRequestHandler as GET, 
    updateRepairRequestHandler as PUT, 
    deleteRepairRequestHandler as DELETE
}