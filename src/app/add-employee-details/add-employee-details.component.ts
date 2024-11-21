import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../_service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css'],
})
export class AddEmployeeDetailsComponent implements OnInit {
  employeeForm!: FormGroup;
  successMessage: string = '';
  selectedImageFile: File | null = null;
  selectedIdProofFile: File | null = null;

  constructor(private fb: FormBuilder, private employeesService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      jobTitle: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      employmentType: ['', Validators.required],
      employmentStatus: ['', Validators.required],
      photo: [null],
      idProof: [null],
      location: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  // Helper function to format date to dd-MM-yyyy
  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // File input handler
  onFileChange(event: Event, controlName: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      if (controlName === 'photo') {
        this.selectedImageFile = file;
      } else if (controlName === 'idProof') {
        this.selectedIdProofFile = file;
      }
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = new FormData();
      
      // Append form fields to FormData
      Object.keys(this.employeeForm.controls).forEach(key => {
        const controlValue = this.employeeForm.get(key)?.value;

        if (controlValue !== null && controlValue !== undefined) {
          if (key === 'dateOfBirth' || key === 'dateOfJoining') {
            const formattedDate = this.formatDate(new Date(controlValue));
            formData.append(key, formattedDate); // Append formatted date string
          } else if (key === 'employmentType' || key === 'employmentStatus' || key === 'country') {
            formData.append(key, controlValue.toString()); // Ensure enums/select fields are strings
          } else if (key === 'photo' && this.selectedImageFile) {
            formData.append('photo', this.selectedImageFile); // Append photo file with the correct key name
          } else if (key === 'idProof' && this.selectedIdProofFile) {
            formData.append('idProof', this.selectedIdProofFile); // Append identityProof file with the correct key name
          } else {
            formData.append(key, controlValue); // Append other form fields
          }
        }
      });

      // Call the service to submit the form
      this.employeesService.createEmployee(formData).subscribe({
        next: (response) => {
          console.log('Employee added successfully:', response);
          this.successMessage = 'Employee has been added successfully!'; // Update success message
          this.employeeForm.reset(); // Reset form after successful submission
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          this.successMessage = 'Failed to add employee. Please try again.'; // Display error message
        },
      });
    } else {
      this.successMessage = 'Please fill in all fields correctly'; // Show validation error message
    }
  }
  onFileSelect(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file) {
      console.log(`Selected file for ${fieldName}:`, file);
      // Here you can perform any additional processing for the selected file
      this.employeeForm.patchValue({ [fieldName]: file });
    }
  }
}
