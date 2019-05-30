import { Component, OnInit } from '@angular/core';
// importing the service that will call the Express API
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';
// import { Signup } from '../models/signupmodel'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // loginInfo = {};
  // signupInfo: Signup;
  signupInfo: any = {
                // firstNameInput: '',
                // lastNameInput: '',
                // emailInput: '',
                //  phoneInput: '',
                //  signupPassword: '',
                // countryInput: ''
                }

  user: any;
  error: string;


  constructor(private userService: UserService,
              private routeTheUSer: Router) { }

  ngOnInit() {
    // this.userService.isLoggedIn()
  //   .then((userInfo) => {this.routeTheUSer.navigate(['/portal']);
  // })
  // .catch((err) => { this.routeTheUSer.navigate(['/signup'])})
  }

  signup() {
    console.log('info', this.signupInfo);
    this.signupInfo.id = Math.floor(1000 + Math.random() * 9000);
   
    this.userService.signup(this.signupInfo)
    .subscribe(response => {
      console.log(response)
    })


  //  .then((theUsercomingFromApi) => {
  //    this.routeTheUSer.navigate(['/portal']);
  //  })
  //   .catch((err) => {
  //   this.user = null;
  //   this.error = err;
  //   });
  }

}
