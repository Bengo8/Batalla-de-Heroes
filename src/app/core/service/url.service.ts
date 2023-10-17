import { Injectable } from '@angular/core';
import { UrlKey } from '../models/urlKey.interface';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private _apiUrl: string = 'https://superheroapi.com/api/1746498355772229';
  private _urlKeys: UrlKey[] = [
    { key: 'HeroData', url: '/{0}' },
    { key: 'HeroSearchName', url: '/search/{0}' },
  ];

  constructor() {}

  public getAPIUrl(): string {
    return this._apiUrl;
  }

  public getFullUrl(urlKey: string, params?: any[]): string {
    let fullUrl: string = '';
    const urlData: UrlKey = this._urlKeys.find((url) => url.key === urlKey);
    if (urlData !== null && urlData !== undefined) {
      fullUrl = this._apiUrl + urlData.url;
      fullUrl = this._fillParamsAndRetrunUrl(fullUrl, params);
    }

    return fullUrl;
  }

  public getUrlKeys(): UrlKey[] {
    return this._urlKeys;
  }

  private _fillParamsAndRetrunUrl(url: string, params: any[]): string {
    if (params !== null && params !== undefined && params.length > 0) {
      for (let index = 0; index < params.length; index++) {
        url = url.replace(`{${index.toString()}}`, params[index]);
      }
    }

    return url;
  }
}
