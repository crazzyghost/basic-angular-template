import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(@Inject('API_URL') apiUrl: string, private http: HttpClient) {
  }
}
