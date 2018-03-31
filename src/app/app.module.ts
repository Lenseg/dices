import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BalanceService } from './modules/balance/balance.service';
import { BetService } from './modules/bet/bet.service';

import { BalanceModule } from './modules/balance/balance.module';
import { BetModule } from './modules/bet/bet.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BalanceModule,
    BetModule,
    BrowserModule
  ],
  providers: [BalanceService, BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
