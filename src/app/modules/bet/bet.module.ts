import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetComponent } from './bet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BetComponent],
  exports: [BetComponent]
})
export class BetModule { }
