import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from './transaction'

@Component({
  moduleId: module.id,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input()
  transaction: Transaction;

  constructor() { }

  ngOnInit() {
  }

  changeCategory(): void {
    // todo: present a modal dialog to select from a list of categories
    this.transaction.category = "FooBar";
    // Should this be handled using event emitters?
    // The goal is to propagate the edit to a service to ensure the change persists
  }

}
