import { Component } from '@angular/core';
import { EmployeeServiceService } from '../_service/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewByIdComponent {
  employee: any; // Replace with your employee model
  dropdownOpen: boolean = false; // Track dropdown state

  constructor(private router: Router, private employeeService: EmployeeServiceService) {}

  // Toggle dropdown visibility
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Handle delete
  onDelete(employeeId: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next: () => alert('Employee deleted successfully'),
        error: (err) => console.error('Error deleting employee:', err)
      });
    }
    this.dropdownOpen = false; // Close dropdown after action
  }

  // Handle download
  onDownload(employeeId: string): void {
    this.employeeService.downloadEmployeeDetails(employeeId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Employee_${employeeId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error: (err) => console.error('Error downloading employee details:', err)
    });
    this.dropdownOpen = false; // Close dropdown after action
  }

  // Handle update
  onUpdate(employee: any): void {
    this.router.navigate(['/update', employee.id]);
    this.dropdownOpen = false; // Close dropdown after action
  }}
