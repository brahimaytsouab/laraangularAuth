import { TestBed } from '@angular/core/testing';

import { BeforLoginService } from './befor-login.service';

describe('BeforLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeforLoginService = TestBed.get(BeforLoginService);
    expect(service).toBeTruthy();
  });
});
