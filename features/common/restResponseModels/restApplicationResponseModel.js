import RestApplicationErrorResponseModel from "./restApplicationErrorResponseModel";

class RestApplicationResponseModel {
    constructor(data, error) {
        this.data = data;
        this.error =  new RestApplicationErrorResponseModel(error);
        
        
    }
}
export default RestApplicationResponseModel;