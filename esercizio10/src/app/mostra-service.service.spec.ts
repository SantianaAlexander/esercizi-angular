import { TestBed } from '@angular/core/testing';

import { MostraServiceService } from './mostra-service.service';

describe('MostraServiceService', () => {
  let service: MostraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
