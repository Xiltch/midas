import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { TransactionDetailComponent } from './transaction/transaction-detail.component';
import { TransactionListComponent } from './transaction/transaction-list.component';
import { TransactionService } from './transaction/transaction.service';

import { transactions } from './transaction/transaction.store'

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailComponent,
    TransactionListComponent
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
