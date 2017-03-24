import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction'
import { TransactionService } from './transaction.service'

@Component({
  moduleId: module.id,
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
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
