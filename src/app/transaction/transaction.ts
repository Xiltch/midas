export class Transaction {
    _id?: string;
    date: Date;
    category: string;
    description: string;
    amount: number;
    currency: string;
    type: string;
    balance: number;
    source: string;
    reference: string;
    account: string;    
    foo?: string;    
}
