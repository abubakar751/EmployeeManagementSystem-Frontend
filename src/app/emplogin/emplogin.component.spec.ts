import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // For navigation after successful login
// Import your authentication service if you have one

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;  // Show loading spinner when submitting
  error: string | null = null;  // Show error message if login fails

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login form with validation
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.invalid) {
      return; // Don't submit if the form is invalid
    }

    this.loading = true;
    const { email, password } = this.loginForm.value;

    // Simulate an authentication request (replace with actual API call)
    // this.authService.login(email, password).subscribe({
    //   next: () => {
    //     this.router.navigate(['/dashboard']); // Redirect to dashboard after login
    //   },
    //   error: (err) => {
    //     this.error = 'Invalid login credentials'; // Show error message
    //     this.loading = false;
    //   }
    // });

    // For now, simulate successful login after 2 seconds
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Invalid login credentials';
        this.loading = false;
      }
    }, 2000);
  }
}
