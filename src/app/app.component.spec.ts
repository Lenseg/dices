import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BalanceService } from './modules/balance/balance.service';
import { BetService } from './modules/bet/bet.service';

import { BalanceModule } from './modules/balance/balance.module';
import { BetModule } from './modules/bet/bet.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BalanceModule,
        BetModule
      ],
      providers: [BalanceService, BetService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
