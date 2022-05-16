import { TestBed } from '@angular/core/testing';

import { SuperStoreService } from './super-store.service';

describe('SuperStoreService', () => {
  let service: SuperStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
