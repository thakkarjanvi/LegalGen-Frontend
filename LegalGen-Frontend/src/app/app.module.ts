import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ResearchpageComponent } from './component/researchpage/researchpage.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ResearchpageComponent,
    UpdateUserProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
