import { TestBed } from '@angular/core/testing';

import { AnimeServiceService } from './anime-service.service';

describe('AnimeServiceService', () => {
  let service: AnimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
