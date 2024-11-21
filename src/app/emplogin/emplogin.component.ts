import { Component } from '@angular/core';
import { EmployeeServiceService } from '../_service/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {
  [x: string]: any; email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private employeeService: EmployeeServiceService, private router: Router) {}

  // onSubmit method that will be called when the form is submitted
  onSubmit() {
    this.employeeService.login(this.email, this.password).subscribe(
      (response) => {
        if (response) {
          this.successMessage = 'Login successful!';
          this.router.navigate(['/employee-dashboard']);  // Redirect after successful login
        }
      },
      (error) => {
        this.errorMessage = 'Login failed: Invalid email or password';
        console.error('Login error:', error);
      }
    );
  }
  onLogin(): void {
    if (this.email && this.password) {
      // Perform login validation logic here (e.g., calling a service)

      // On successful login, redirect to the desired page
      this.router.navigate(['/empdashboard']); // Replace '/dashboard' with your desired route
    } else {
      alert('Please enter valid email and password');
    }
  }
}


