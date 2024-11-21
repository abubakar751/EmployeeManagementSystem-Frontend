import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { ViewByIdComponent } from './view-by-id/view-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminsComponent,
    UpdateEmployeComponent,
    EmploginComponent,
    AddEmployeeDetailsComponent,
    EmployeedashboardComponent,
    ViewByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule // Add ReactiveFormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
