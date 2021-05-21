import { of } from 'rxjs';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: any;
  let mockResponse: any;

  beforeEach(() => {
    mockResponse = {
      results: [{
        name: {
          first: 'Liam',
          last: 'Lieng',
        },
        email: "liam.lieng@example.com",
        picture: {
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg"
        }
      }]
    };

    httpMock = {
      get: () => of(mockResponse)
    };
    service = new UserService(httpMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should map results', () => {


    const parsedResults =  service.mapResults(mockResponse.results);

    expect(parsedResults).toEqual([{
      email: "liam.lieng@example.com",
      image: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
      name: "Liam Lieng"
    }]);
  });


  it('Should get users from endpoint', () => {
    service.getUsers().subscribe(results => {
      expect(results).toEqual([{
        email: 'liam.lieng@example.com',
        image: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
        name: "Liam Lieng"
      }]);
    });
  });
});
