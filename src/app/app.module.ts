import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/components/transaction';
import { TransactionsComponent } from './transaction/components/transactions';
import { TransactionService } from './transaction/services/transaction';

import { transactions } from './transaction/stores/transaction'

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
