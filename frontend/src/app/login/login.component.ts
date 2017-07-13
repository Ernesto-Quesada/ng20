import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SenderService } from '../sender.service';

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
  constructor(private mySessionService: SenderService) { }
  ngOnInit() {
   this.mySessionService.isLoggedIn()
      .then((userInfo ) => {console.log(userInfo + 'ivansssssssssssss'); return this.user = userInfo});
  }
  login() {
    const thePromise = this.mySessionService.login(this.loginInfo);

    thePromise.subscribe((userInfo) => {
      this.user = userInfo;
      this.error = null;
    console.log('USER INFO', userInfo);
    console.log('USER', this.user);
    // this.logMe.emit(this.user);
    // console.log('this.user from logme', this.logMe.emit('hola'));
    });
    console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
    console.log(thePromise);


    // thePromise.catch((err) => {
    //   this.user = null;
    //   this.error = err;
    // });
  }
  onClic() {
    this.logMe.emit('hello');
    console.log('USER', this.user);
    console.log('this.user from logme', this.logMe.emit('hello'));
  }


}





