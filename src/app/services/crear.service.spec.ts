import { TestBed } from '@angular/core/testing';

import { CrearService } from './crear.service';

describe('CrearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearService = TestBed.get(CrearService);
    expect(service).toBeTruthy();
  });
});
