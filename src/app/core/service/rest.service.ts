import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(public httpClient: HttpClient) { }

  public post(url: string, payload: any): Observable<Object> {
    return this.httpClient.post(url, payload);
  } 

  public get(url: string): Observable<Object> {
    return this.httpClient.get(url);
  }
}
