import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: BehaviorSubject<number>;

  constructor() { }

  ngOnInit() {
  }

}
