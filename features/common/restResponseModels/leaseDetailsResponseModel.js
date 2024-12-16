import RestApplicationErrorResponseModel from "./restApplicationErrorResponseModel";
import Lease from '../../leases/leasePayload';

export const leaseDetailsResponseModel = new RestApplicationErrorResponseModel(new Lease(), null);