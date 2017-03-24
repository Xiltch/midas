import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsComponent } from './transaction/transactions.component';
import { TransactionService } from './transaction/transaction.service';

import { transactions } from './transaction/transaction.store'

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({transactions})
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
