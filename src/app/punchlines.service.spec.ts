import { TestBed } from '@angular/core/testing';

import { PunchlinesService } from './punchlines.service';

describe('PunchlinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunchlinesService = TestBed.get(PunchlinesService);
    expect(service).toBeTruthy();
  });
});
