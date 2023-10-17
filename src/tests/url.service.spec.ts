import { TestBed } from '@angular/core/testing';
import { UrlKey } from 'src/app/core/models/urlKey.interface';

import { UrlService } from '../app/core/service/url.service';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get API url', () => {
    expect(service.getAPIUrl()).toBeTruthy();
  });

  it('Should contain URLKeys', () => {
    expect(service.getUrlKeys()).toBeTruthy();
  });

  it('Should return full URL for hero data request', () => {
    const heroDataKey: string = 'HeroData';
    const params = [1];
    const fullUrl: string = service.getFullUrl(heroDataKey, params);
    expect(fullUrl).toBeTruthy();
    expect(fullUrl.includes(service.getAPIUrl())).toBeTruthy();
    expect(fullUrl.includes(params[0].toString())).toBeTruthy();
  });

  
  it('Should return full URL for hero search name request ', () => {
    const heroNameSearchKey: string = 'HeroSearchName';
    const params = ['Thor'];
    const fullUrl: string = service.getFullUrl(heroNameSearchKey, params);
    expect(fullUrl).toBeTruthy();
    expect(fullUrl.includes(service.getAPIUrl())).toBeTruthy();
    expect(fullUrl.includes(params[0].toString())).toBeTruthy();
  });

  it('Should return empty string when urlKey does not exist', () => {
    const urlIncorrectKey: string = 'keyIncorrect';
    const fullUrl: string = service.getFullUrl(urlIncorrectKey);
    expect(fullUrl).toBe('');
  });
});
