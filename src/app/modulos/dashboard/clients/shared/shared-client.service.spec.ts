import { TestBed } from '@angular/core/testing';

import { SharedClientService } from './shared-client.service';

describe('SharedClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedClientService = TestBed.get(SharedClientService);
    expect(service).toBeTruthy();
  });
});
