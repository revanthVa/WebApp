import { TestBed } from '@angular/core/testing';

import { ManfsService } from './manfs.service';

describe('ManfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManfsService = TestBed.get(ManfsService);
    expect(service).toBeTruthy();
  });
});
