import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEmployeeDetailsComponent } from './add-employee-details/add-employee-details.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { ViewByIdComponent } from './view-by-id/view-by-id.component';




const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'emplogin',component:EmploginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'details',component:AddEmployeeDetailsComponent},
  {path:'adminsFields',component:AdminsComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'updateEmployee/:id',component:UpdateEmployeComponent},
  {path:'viewByID/:id',component:ViewByIdComponent},
  {path:"empdashboard",component:EmployeedashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
