import { Transaction } from './transaction'

export var TRANSACTIONS: Transaction[] = [
    { _id: '1', type: 'DEBIT', category: 'Dummy', date: new Date('02/03/2017'), description: "PURCHASE SHOP A", amount: -10.00, currency: 'USD', source: 'DEBIT_CARD', balance: 250.00, reference: null, account: 'Demo' },
    { _id: '2', type: 'CREDIT', category: 'Dummy', date: new Date('02/03/2017'), description: "SALARY FROM JOB A", amount: 100.0, currency: 'USD', source: 'ACH_CREDIT', balance: 350.00, reference: null, account: 'Demo' },
    { _id: '3', type: 'DEBIT', category: 'Dummy', date: new Date('02/02/2017'), description: "PURCHASE SHOP B", amount: -15, currency: 'USD', source: 'DEBIT_CARD', balance: 335.00, reference: null, account: 'Demo' },
    { _id: '4', type: 'DEBIT', category: 'Dummy', date: new Date('02/02/2017'), description: "LUNCH PLACE T", amount: -6.47, currency: 'USD', source: 'DEBIT_CARD', balance: 328.53, reference: null, account: 'Demo' },
    { _id: '5', type: 'DEBIT', category: 'Dummy', date: new Date('02/01/2017'), description: "DINNER AT MCD'S", amount: -25.24, currency: 'USD', source: 'DEBIT_CARD', balance: 303.29, reference: null, account: 'Demo' },
    { _id: '6', type: 'DEBIT', category: 'Dummy', date: new Date('02/01/2017'), description: "SAVING MONEY", amount: -50.00, currency: 'USD', source: 'ACCT_XFER', balance: 253.29, reference: null, account: 'Demo' }
];