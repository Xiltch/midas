import { Transaction } from './transaction/transaction';

export interface AppStore {
    transactions: Transaction[];
    selectedItem: Transaction;
}