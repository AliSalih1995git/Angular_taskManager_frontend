import { TestBed } from '@angular/core/testing';

import { AdminActiveguardGuard } from './admin-activeguard.guard';

describe('AdminActiveguardGuard', () => {
  let guard: AdminActiveguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminActiveguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
