import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'login',  component: LoginComponent },
//   { path: 'signup',  component: SignupComponent },

//   // { path: 'phone/:id', component: PhoneDetailsComponent },

//   { path: '**', redirectTo: '' }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
