import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 
  private apiUrl = 'http://localhost:8001/emp';  // URL to your backend API
  private apiUrl2 = 'http://localhost:8001/empLogin';  // URL to your login API
  
  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  // Get employee by ID


  // Delete employee by ID
 
  // Update employee details
  updateEmployee(id: string, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, employeeData);
  }
  downloadEmployeeDetails(employeeId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/employees/download/${employeeId}`, { responseType: 'blob' });
  }
  
  // Login employee (authentication)
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    
    // Post request to backend API with login data
    return this.http.post(`${this.apiUrl2}/getAll`, loginData, { responseType: 'text' });
  }
  getEmployeeById(employeeId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getId/${employeeId}`);
  }

  // Fetch all employees
  fetchAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }
  deleteEmployee(employeeId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/employees/${employeeId}`);
  }
  

  // Submit employee details (with form data)
 
  createEmployee(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, formData);
  }
  @Injectable({
    providedIn: 'root',
  })
  
    private apiUrl3 = 'http://localhost:8001/Register';
  
    
  
    registerEmployee(employee: any): Observable<string> {
      return this.http.post<string>(`${this.apiUrl3}/create`, employee);
      
    }
}
