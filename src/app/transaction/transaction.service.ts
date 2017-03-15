import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { TRANSACTIONS } from '../transactions/mock-transactions'

@Injectable()
export class TransactionService {

  constructor() { }

  getTransactions(): Promise<Transaction[]> {
    return Promise.resolve(TRANSACTIONS);
  }

  getTransaction(id: number): Promise<Transaction> {
    return this.getTransactions().then(transactions => transactions[id]);
  }

}
