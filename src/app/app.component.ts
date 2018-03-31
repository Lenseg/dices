import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BetService } from './modules/bet/bet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  winningNumber: number;
  cacheNumber: number;
  winningNumberSubject: BehaviorSubject<number>;
  hash: BehaviorSubject<string>;
  constructor(private betService: BetService) {
    this.hash = this.betService.hash;
    this.winningNumberSubject = this.betService.winningNumber;
    this.winningNumberSubject.subscribe((val) => {
      this.winningNumber = this.cacheNumber;
      this.cacheNumber = val;
    });
  }
}
