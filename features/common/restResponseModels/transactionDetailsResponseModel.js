import RestApplicationResponseModel from './restApplicationResponseModel';
import { Transaction } from '../../ledgers/transactionPayload';

export const transactionDetailsResponseModel = new RestApplicationResponseModel(new Transaction(), null);