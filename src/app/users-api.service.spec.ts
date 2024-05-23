import { TestBed } from '@angular/core/testing';

import { UsersApiService } from './users-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersApiService', () => {
  let service: UsersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersApiService]
    });
    service = TestBed.inject(UsersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
