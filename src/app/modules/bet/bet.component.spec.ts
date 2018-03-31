import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { BetComponent } from './bet.component';

import { BalanceService } from '../balance/balance.service';
import { BetService } from '../bet/bet.service';


describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetComponent ],
      providers: [FormBuilder, BalanceService, BetService],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate payout properly', () => {
    expect(component.getPayout(50)).toBe(2);
    expect(component.getPayout(1)).toBe(100);
    expect(component.getPayout(99)).toBe(1.01);
    expect(component.getPayout(90)).toBe(1.11);
    expect(component.getPayout(10)).toBe(10);
  });
});
