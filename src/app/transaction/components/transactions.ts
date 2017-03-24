import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction'
import { TransactionService } from '../services/transaction'

@Component({
  moduleId: module.id,
  selector: 'app-transactions',
  templateUrl: './transactions.html',
  styleUrls: ['./transactions.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  selectedTransaction: Transaction;

  constructor(private transactionService: TransactionService) { }

  getTransactions() : void {
    this.transactionService.getTransactions()
      .subscribe(transactions => this.transactions = transactions,
      err => { console.log(err); }
      );
  }

  ngOnInit() : void {
    this.getTransactions();
  }

  onSelect(event: Event, transaction: Transaction): void {
    this.selectedTransaction = transaction;
    event.stopPropagation();
  }

}
