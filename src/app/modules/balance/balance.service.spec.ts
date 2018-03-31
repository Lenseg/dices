import { TestBed, inject } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalanceService]
    });
    localStorage.removeItem('balance');
  });

  it('should be created', inject([BalanceService], (service: BalanceService) => {
    expect(service).toBeTruthy();
  }));

  it('should set zero balance by default', inject([BalanceService], (service: BalanceService) => {
    expect(service.balance.value).toBe(0);
  }));

  it('should give free credis', inject([BalanceService], (service: BalanceService) => {
    service.getFreeCredits();
    expect(service.balance.value).toBe(100);
  }));

  it('should not give free credis if you have credis', inject([BalanceService], (service: BalanceService) => {
    service.getFreeCredits();
    service.getFreeCredits();
    expect(service.balance.value).toBe(100);
  }));

  it('should increment credis', inject([BalanceService], (service: BalanceService) => {
    service.incrementBalance(10);
    expect(service.balance.value).toBe(10);
  }));

  it('should decrement credis', inject([BalanceService], (service: BalanceService) => {
    service.getFreeCredits();
    service.incrementBalance(-10);
    expect(service.balance.value).toBe(90);
  }));

});
