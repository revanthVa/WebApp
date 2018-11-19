import { TestBed } from '@angular/core/testing';

import { SqlqueryService } from './sqlquery.service';

describe('SqlqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlqueryService = TestBed.get(SqlqueryService);
    expect(service).toBeTruthy();
  });
});
