import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction'

@Component({
  moduleId: module.id,
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
