import { TestBed, inject } from '@angular/core/testing';

import { BusServiceService } from './bus-service.service';

describe('BusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusServiceService]
    });
  });

  it('should be created', inject([BusServiceService], (service: BusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
