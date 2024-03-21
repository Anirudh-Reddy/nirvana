import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/api';

  login(cred:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`,cred);
  }

}
