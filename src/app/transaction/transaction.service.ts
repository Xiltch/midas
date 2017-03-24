import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions'

@Injectable()
export class TransactionService {

  private transactionsUrl = 'http://localhost:3000/api/transactions';
  
  constructor(private http: Http) { }

/*
  getTransactions(): Promise<Transaction[]> {
    return Promise.resolve(TRANSACTIONS);
  }

  getTransaction(id: number): Promise<Transaction> {
    return this.getTransactions().then(transactions => transactions[id]);
  }

*/

  getTransactions(): Observable<Transaction[]> {
    return this.http.get(this.transactionsUrl)
      .map((response:Response) => response.json() as Transaction[])
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }

  // Dont need to do this because we should be passing object references around
  /*
  getTransaction(id: String): Observable<Transaction> { 
    return this.getTransactions()
      .flatMap(transactions => transactions)
      .filter(transaction => transaction._id === id)
      .first();
  }
  */

  createTransaction(newTransaction: Transaction): Observable<Transaction> {
    return this.http.post(this.transactionsUrl, newTransaction)
      .map(response => response.json() as Transaction)
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post(this.transactionsUrl + '/' + transaction._id, transaction)
      .map(response => response.json() as Transaction)
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }

  deleteTransaction(transaction: Transaction): Observable<String> {
    return this.http.delete(this.transactionsUrl + '/' + transaction)
      .map(response => response.json() as String)
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }



}
