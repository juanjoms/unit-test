import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: any;
  let responseMock: any;

  beforeEach(() => {
    httpMock = {};
    service = new UserService(httpMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
