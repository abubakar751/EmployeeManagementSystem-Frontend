import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  deleteEmployee(id: string) {
    throw new Error('Method not implemented.');
  }
  getAllEmployees() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8001/admin';  // Replace with your actual backend API URL
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    const loginData={username,password};
     
    return this.http.post(`${this.apiUrl}/get`,loginData ,{responseType:'text'});
  }
  
}
