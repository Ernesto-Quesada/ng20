import { Component , OnInit} from '@angular/core';
import { SenderService } from './sender.service';
import { NavigationComponent } from './navigation/navigation.component';
import { EmiterComponent } from './emiter/emiter.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sender';
  loginInfo = {};
  user: any; 
  error: any;
  onNotify(message: string): void {
     console.log(message);
    alert(message);
  }
    constructor(private mySessionService: SenderService) { }

// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
  //  this.mySessionService.isLoggedIn()
  //     .then(userInfo => this.user = userInfo);
  }
// login() {
//     const thePromise = this.mySessionService.login(this.loginInfo);
//     thePromise.then((userInfo) => {
//       this.user = userInfo;
//       this.error = null;
//     console.log('USER INFO', userInfo);
//     console.log('USER', this.user);
//     // this.logMe.emit(this.user);
//     // console.log('this.user from logme', this.logMe.emit('hola'));
//     });
//     console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
//     console.log(thePromise);


//     thePromise.catch((err) => {
//       this.user = null;
//       this.error = err;
//     });
//   }

}
