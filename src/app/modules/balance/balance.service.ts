import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BalanceService {

  balance: BehaviorSubject<number>;

  constructor() {
    const initialBalance = parseInt(localStorage.getItem('balance'), 10) || 0;
    this.balance = new BehaviorSubject (initialBalance);
  }

  getFreeCredits() {
    if (this.balance.value === 0) {
      this.balance.next(100);
    }
  }

  placeBet(amount) {
    const currentBalance = this.balance.value;
    if (currentBalance >= amount) {
      this.balance.next(currentBalance - amount);
    }
  }
}
