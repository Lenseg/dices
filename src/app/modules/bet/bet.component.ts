import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  betForm: FormGroup;

  constructor(private fb: FormBuilder, private balanceService: BalanceService) {
    this.betForm = this.fb.group({
      amount: [ '', [ Validators.required, Validators.min(1), this.validateLessThanBalance.bind(this) ]],
      number: [ '', [ Validators.required, Validators.min(1), Validators.max(100) ]]
    });
  }

  ngOnInit() {
  }

  getPayout(chance) {
    return (100 / (chance || 1)).toFixed(2);
  }

  validateLessThanBalance(control: AbstractControl) {
    return this.balanceService.balance.value > control.value ? null : { overBalance: true };
  }

}
