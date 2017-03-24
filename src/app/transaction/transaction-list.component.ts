import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction.model'
import { TransactionService } from './transaction.service'

@Component({
  moduleId: module.id,
  selector: 'app-transactions',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

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
