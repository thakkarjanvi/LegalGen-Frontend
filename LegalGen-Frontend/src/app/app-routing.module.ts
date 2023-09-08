import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';


import { DashboardComponent } from './component/dashboard/dashboard.component';


import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ResearchpageComponent } from './component/researchpage/researchpage.component';
import { AdvancefilterComponent } from './component/advancefilter/advancefilter.component';
import { UpdatePasswordComponent } from './component/update-password/update-password.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},

  {path:'update-profile',component: UpdateUserProfileComponent},
  {path:'researchpage', component: ResearchpageComponent},

  {path:'dashboard', component: DashboardComponent},
  {path:'update-profile',component: UpdateUserProfileComponent},
  {path:'advancefilter',component: AdvancefilterComponent},
  {path : 'update-password',component : UpdatePasswordComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
