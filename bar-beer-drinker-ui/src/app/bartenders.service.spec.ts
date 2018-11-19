import { TestBed } from '@angular/core/testing';

import { BartendersService } from './bartenders.service';

describe('BartendersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BartendersService = TestBed.get(BartendersService);
    expect(service).toBeTruthy();
  });
});
