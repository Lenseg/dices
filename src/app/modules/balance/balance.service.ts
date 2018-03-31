import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BalanceService {

  balance: BehaviorSubject<number>;

  constructor() {
    const initialBalance = parseInt(localStorage.getItem('balance'), 10) || 0;
    this.balance = new BehaviorSubject (initialBalance);
  }

  incrementBalance(amount) {
    const currentBalance = this.balance.value;
    if (currentBalance + amount >= 0) {
      this.balance.next(currentBalance + amount);
      this.storeBalance();
    }
  }

  getFreeCredits() {
    if (this.balance.value === 0) {
      this.incrementBalance(100);
    }
  }

  storeBalance() {
    localStorage.setItem('balance', this.balance.value.toString());
  }
}
