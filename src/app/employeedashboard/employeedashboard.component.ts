import { Component } from '@angular/core';
import { EmployeeServiceService } from '../_service/employee-service.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent {

  employees: any[] = [];
  searchQuery: any;

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data; // Replace with your actual API response structure
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }

  addLeave(): void {
    console.log('Add Leave button clicked');
    // Redirect or handle Add Leave logic
  }

  addEmployee(): void {
    console.log('Add Employee button clicked');
    // Redirect or handle Add Employee logic
  }
  
  onSearch(): void {
    // Filter logic if required
    console.log('Searching for:', this.searchQuery);
  }
}
