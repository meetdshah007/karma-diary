import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpService', () => {
  let service: HttpService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should able to call GET call.', () => {
    expect(service.get('fakeURL')).toBeTruthy();
  });

  it('should able to call DELETE call.', () => {
    expect(service.delete('fakeURL')).toBeTruthy();
  });

  it('should able to call POST call.', () => {
    expect(service.post('fakeURL', null)).toBeTruthy();
  });

  it('should able to call PUT call.', () => {
    expect(service.get('fakeURL', null)).toBeTruthy();
  });

  it('should able to call GET with complete URL call.', () => {
    expect(service.makeApiCall('http://fakeURL.com/fakeurl', 'get')).toBeTruthy();
  });

  it('should able to call POST with complete URL call.', () => {
    expect(service.makeApiCall('http://fakeURL.com/fakeurl', 'post', null, null)).toBeTruthy();
  });
});
