import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComponent } from './balance.component';
import { BalanceService } from './balance.service';

describe('BalanceComponent', () => {
  let component: BalanceComponent;
  let fixture: ComponentFixture<BalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceComponent ],
      providers: [BalanceService]
    })
    .compileComponents();
    localStorage.removeItem('balance');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get free credis', () => {
    component.getFreeCredits();
    expect(component.balance.value).toBeTruthy(100);
  });
});
