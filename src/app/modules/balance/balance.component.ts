import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  credits: number;

  constructor() { }

  ngOnInit() {
    this.credits = 0;
  }

}
