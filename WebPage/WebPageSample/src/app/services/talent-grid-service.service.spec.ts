import { TestBed } from '@angular/core/testing';

import { TalentGridServiceService } from './talent-grid-service.service';

describe('TalentGridServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentGridServiceService = TestBed.get(TalentGridServiceService);
    expect(service).toBeTruthy();
  });
});
