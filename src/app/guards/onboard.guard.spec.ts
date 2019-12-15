import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { OnboardGuard } from './onboard.guard';

describe('OnboardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [OnboardGuard]
    });
  });

  it('should ...', inject([OnboardGuard], (guard: OnboardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
