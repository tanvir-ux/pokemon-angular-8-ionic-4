import { TestBed } from '@angular/core/testing';

import { PrayertimeService } from './prayertime.service';

describe('PrayertimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrayertimeService = TestBed.get(PrayertimeService);
    expect(service).toBeTruthy();
  });
});
