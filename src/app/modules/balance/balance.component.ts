import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BalanceService } from './balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: BehaviorSubject<number>;

  constructor(private blanceService: BalanceService) {
    this.balance = this.blanceService.balance;
  }

  ngOnInit() {
  }

  getFreeCredits() {
    this.blanceService.getFreeCredits();
  }

}
