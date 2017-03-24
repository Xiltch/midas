import { Transaction } from './transaction/models/transaction';

export interface AppStore {
    transactions: Transaction[];
    selectedItem: Transaction;
}