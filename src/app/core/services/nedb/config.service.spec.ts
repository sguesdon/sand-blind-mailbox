import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('NeDb Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
