import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionService {

  private transactionsUrl = 'http://localhost:3000/api/transactions';
  
  constructor(private http: Http) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get(this.transactionsUrl)
      .map((response:Response) => response.json() as Transaction[])
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }

  // We dont implement a getTransaction(id: String) method because we are using object
  // references to from the array of Transactions 

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
