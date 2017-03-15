import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction/transaction'
import { TransactionService } from '../transaction/transaction.service'

@Component({
  moduleId: module.id,
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  getTransactions() : void {
    this.transactionService.getTransactions()
      .then(transactions => this.transactions = transactions);
  }

  ngOnInit() : void {
    this.getTransactions();
  }

}
