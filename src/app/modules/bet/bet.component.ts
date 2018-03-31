import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { BalanceService } from '../balance/balance.service';
import { BetService } from '../bet/bet.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  betForm: FormGroup;

  constructor(private fb: FormBuilder, private balanceService: BalanceService, private betService: BetService) {
    this.betForm = this.fb.group({
      amount: [ '', [ Validators.required, Validators.min(1), this.validateLessThanBalance.bind(this) ]],
      number: [ '', [ Validators.required, Validators.min(1), Validators.max(100) ]]
    });
  }

  ngOnInit() {
  }

  play(betType) {
    const betNumbet = this.betForm.controls.number.value,
    bet = this.betForm.controls.amount.value;
    let balanceIncrement,
    won;
    switch (betType) {
      case 'hi' :
        won = this.processHiBet(betNumbet);
        break;
      case 'lo' :
        won = this.processLoBet(betNumbet);
    }
    balanceIncrement = parseFloat(((bet * won) - bet).toFixed(2));
    this.balanceService.incrementBalance(balanceIncrement);
    this.betService.nextTick();
  }

  processHiBet(betNumbet) {
    return betNumbet <= this.betService.winningNumber.value ?
     this.getPayout(100 - betNumbet) : 0;
  }

  processLoBet(betNumbet) {
    return betNumbet >= this.betService.winningNumber.value ?
     this.getPayout(betNumbet) : 0;
  }

  getPayout(chance) {
    return parseFloat((100 / (chance || 1)).toFixed(2));
  }

  validateLessThanBalance(control: AbstractControl) {
    return this.balanceService.balance.value > control.value ? null : { overBalance: true };
  }

}
