import { TestBed, inject } from '@angular/core/testing';

import { BalanceService } from './balance.service';

describe('BalanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalanceService]
    });
  });

  it('should be created', inject([BalanceService], (service: BalanceService) => {
    expect(service).toBeTruthy();
  }));

  it('should set zero balance by default', inject([BalanceService], (service: BalanceService) => {
    expect(service.balance.value).toBe(0);
  }));
});
