import { TestBed } from '@angular/core/testing';

import { DataProccessService } from './data-proccess.service';

describe('DataProccessService', () => {
  let service: DataProccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
