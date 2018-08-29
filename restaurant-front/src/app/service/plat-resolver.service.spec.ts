import { TestBed, inject } from '@angular/core/testing';

import { PlatResolverService } from './plat-resolver.service';

describe('PlatResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatResolverService]
    });
  });

  it('should be created', inject([PlatResolverService], (service: PlatResolverService) => {
    expect(service).toBeTruthy();
  }));
});
