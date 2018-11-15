import { TestBed } from '@angular/core/testing';

import { SharedUserDataService } from './shared-user-data.service';

describe('SharedUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedUserDataService = TestBed.get(SharedUserDataService);
    expect(service).toBeTruthy();
  });
});
