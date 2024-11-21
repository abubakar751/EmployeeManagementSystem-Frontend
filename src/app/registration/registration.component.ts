import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../_service/employee-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // Define the properties required in the template
  employee: any = { fullName: '', email: '', password: '' };
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private employeeService: EmployeeServiceService, private router: Router) {}

  // Method to handle form submission
  registerEmployee() {
    this.employeeService.registerEmployee(this.employee).subscribe({
      next: (response) => {
        console.log('Response:', response); // Log response for debugging
        this.successMessage = 'Employee successfully registered!';
        this.errorMessage = null;
        this.employee = { fullName: '', email: '', password: '' }; // Reset form
        this.router.navigate(['/emplogin']); // Redirect after success
      },

      
    });
  }
}
