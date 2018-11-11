import { TestBed } from '@angular/core/testing';

import { AdminSysService } from './admin-sys.service';

describe('AdminSysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminSysService = TestBed.get(AdminSysService);
    expect(service).toBeTruthy();
  });
});
