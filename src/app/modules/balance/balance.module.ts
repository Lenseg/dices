import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BalanceComponent],
  exports: [BalanceComponent]
})
export class BalanceModule { }
