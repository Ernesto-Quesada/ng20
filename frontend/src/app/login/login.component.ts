import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logMe: EventEmitter<any> = new EventEmitter<any>();
  loginInfo = {};
  user: any;
  error: any;
  constructor(private userService: UserService, private routetheuser: Router) { }

  ngOnInit() {
  //  this.userService.isLoggedIn()
  //     // .then((theUsercomingFromApi ) => {
  //     //   this.user = theUsercomingFromApi
  //     //   console.log(' login ---------', this.user);
  //     //   this.routetheuser.navigate(['/profile']);
  //     // })
  //     .catch((err) => {
  //     console.log('error in login ---------', err)
  //       });
  }
  login() {
    console.log(this.loginInfo)
     this.userService.login(this.loginInfo)
    //  this.signupInfo.id = Math.floor(1000 + Math.random() * 9000);
     .subscribe(response => {
       console.log(response)
       if(response.length === 1) {
        this.routetheuser.navigate(['/profile']);
       }


    //   .then((theUsercomingFromApi) => {
    //     this.mySessionService.loggedIn(theUsercomingFromApi);
    //     console.log('yes');
    //     this.user = theUsercomingFromApi;
    //     this.error = null;
    //     this.routetheuser.navigate(['/profile']);
    // })
    // // console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
    // .catch((err) => {
    //   const apiInfo = err.json();
    //         this.error = apiInfo.message;
    // });
  })


}
}





