import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<any> {
    return this.http.get("http://localhost:5000/api/customers") as Observable<any>;
  }
}
