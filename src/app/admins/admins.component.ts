import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../_service/employee-service.service';
 // Make sure the correct service is imported

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {
  searchText: string = '';
  employees: any[] = [];
  filteredEmployees: any[] = [];

  constructor(private router: Router, private employeeService: EmployeeServiceService) {} // Use EmployeeService here

  // Fetch all employees when the component initializes
  ngOnInit() {
    this.onGetAll();
  }

  // Called when the Get All Employees button is clicked
  onGetAll() {
    this.employeeService.getAllEmployees().subscribe(
      (response: any[]) => {
        this.employees = response;
        this.filteredEmployees = response;
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
        alert('Failed to fetch employee data');
      }
    );
  }

  // Called when the Search Bar input changes
  onSearch() {
    if (this.searchText) {
      this.filteredEmployees = this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  // Called when the Update button is clicked
  onUpdate(employee: any) {
    // Redirect to the update page (assuming it's a separate page)
    this.router.navigate(['/updateEmployee/:id']);
  }

  // Called when the Delete button is clicked
  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          alert('Employee deleted successfully');
          this.onGetAll(); // Refresh the employee list
        },
        (error: any) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee');
        }
      );
    }
  }

  
  onLogin() {
    this.router.navigate(['/admin-login']);
  }

  // Called when the Register button is clicked
  onRegister() {
    this.router.navigate(['/register']); // Navigate to the registration page
  }
 
  onView(employee: any): void {
    console.log('View Employee:', employee);
    alert(`Viewing details of Employee ID: ${employee.employeeId}`);
    this.router.navigate(['/viewByID/:id'])
  }
  
  onDownload(employeeId: string): void {
    console.log('Download for Employee ID:', employeeId);
    alert(`Downloading data for Employee ID: ${employeeId}`);
  }
  
  
}
