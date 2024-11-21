import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_service/admin-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  userName: string = '';
  password: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  onLoginSubmit() {
    this.adminService.login(this.userName, this.password).subscribe(
      (response) => {
        if (response ) {
       
          // Optional check
          this.router.navigate(['/adminsFields']); 
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid username or password'); // Display an error message
      }
    );
  }
}
