import { Transaction } from './transaction/transaction.model';

export interface AppStore {
    transactions: Transaction[];
    selectedItem: Transaction;
}