import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BetService } from './modules/bet/bet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hash: BehaviorSubject<string>;
  constructor(private betService: BetService) {
    this.hash = this.betService.hash;
  }
}
