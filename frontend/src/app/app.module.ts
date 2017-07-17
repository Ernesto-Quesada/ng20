import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SenderService } from './sender.service';


// import { AppRoutingModule } from './app-routing.module';
// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
// import { PhoneListComponent } from './phone-list/phone-list.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmiterComponent } from './emiter/emiter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AgencyComponent } from './agency/agency.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import {AgencyService} from './agency.service';
import { RelativeComponent } from './relative/relative.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'agency',  component: AgencyComponent },
  { path: 'profile',  component: UserprofileComponent },

  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    SignupComponent,
    LoginComponent,
    EmiterComponent,
    NavigationComponent,
    HomeComponent,
    AgencyComponent,
    AgencyDetailsComponent,
    RelativeComponent,
    // MaterialModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  providers: [SenderService, AgencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
