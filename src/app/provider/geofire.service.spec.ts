import { TestBed } from '@angular/core/testing';

import { GeofireService } from './geofire.service';

describe('GeofireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeofireService = TestBed.get(GeofireService);
    expect(service).toBeTruthy();
  });
});
