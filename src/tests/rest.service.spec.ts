import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from '../app/core/service/rest.service';

describe('RestService', () => {
  let service: RestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should make GET request', () => {
    const url = 'https://ejemplo.com/api/data';
    service.get(url).subscribe((response: any) => {
      expect(response).toBeTruthy();
    });
    const req = httpMock.expectOne(url);
    req.flush({ data: 'ejemplo' });
    expect(req.request.method).toBe('GET');
  })

  it('Should make POST request ', () => {
    const url = 'https://ejemplo.com/api/data';
    const body = {data: "data"};
    service.post(url, body).subscribe((response: any) => {
      expect(response).toBeTruthy();
    })

    const req = httpMock.expectOne(url);
    req.flush({data: "ejemplo"});
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(body);
  })
});
