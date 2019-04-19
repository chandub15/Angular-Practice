import { TestBed } from '@angular/core/testing';

import { MyServiceClass } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyServiceClass = TestBed.get(MyServiceClass);
    expect(service).toBeTruthy();
  });
});
