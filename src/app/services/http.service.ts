import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Method to make GET API call with Baseurl.
   * @param url relative url.
   * @optional @param params HttpParams added as query params. 
   */
  get(url: string, params?: HttpParams): Observable<any> {
    return this.makeApiCall(`${environment.baseUrl}/${url}`, 'get', params);
  }

  /**
   * Method to make DELETE API call with Baseurl.
   * @param url relative url.
   * @optional @param params HttpParams added as query params. 
   */
  delete(url: string, params?: HttpParams): Observable<any> {
    return this.makeApiCall(`${environment.baseUrl}/${url}`, 'delete', params);
  }

  /**
   * Method to make POST API call with Baseurl.
   * @param url relative url.
   * @param data JSON data to passed along with API call.
   * @optional @param params HttpParams added as query params.
   */
  post(url: string, data: any, params?: HttpParams): Observable<any> {
    return this.makeApiCall(`${environment.baseUrl}/${url}`, 'post', params, data);
  }

  /**
   * Method to make PUT API call with Baseurl.
   * @param url relative url.
   * @param data JSON data to passed along with API call.
   * @optional @param params HttpParams added as query params.
   */
  put(url: string, data: any, params?: HttpParams): Observable<any> {
    return this.makeApiCall(`${environment.baseUrl}/${url}`, 'pit', params, data);
  }

  /**
   * Method to make API call without Baseurl.
   * @param url complete url.
   * @param method type of HttpCall. only supports get,put,patch,post,delete.
   * @optional @param params HttpParams added as query params.
   * @optional @param data JSON data to passed along with put,post and patch API call.
   */
  makeApiCall(url: string, method: string, params?: HttpParams, data?: any): Observable<any> {
    if (method === 'get' || method === 'delete') {
      return this.http[method](url, {
        params
      });
    }
    return this.http[method](url, data, {
      params
    });
  }
}
