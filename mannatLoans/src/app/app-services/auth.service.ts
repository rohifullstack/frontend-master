import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://192.168.0.103:8080";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) { }

  userlogin(){
   return this.http.get(`${this.baseUrl}/user/${'kele'}/${'kele'}`)
  }
}
