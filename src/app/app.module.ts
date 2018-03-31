import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BalanceService } from './modules/balance/balance.service';

import { BalanceModule } from './modules/balance/balance.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BalanceModule,
    BrowserModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
