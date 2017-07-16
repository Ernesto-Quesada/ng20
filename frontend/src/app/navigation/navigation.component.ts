import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    userLogged: boolean =false;

  constructor(
    private mySessionService: SenderService,
    private routetheuser: Router
  ) { }
      ngOnInit() {
      this.mySessionService.loggedIn$.subscribe((userFromApi) => {
          this.userLogged = true;
      
      });


      this.mySessionService.isLoggedIn()
        // if logged in, redirect to /profile
        .then((userInfo) => {
            this.routetheuser.navigate(['/profile']);
            this.userLogged = true;
        })
        // else redirect to /
        .catch((err) => {
            this.routetheuser.navigate(['/']);
        });
  }
  
  logMeOut() {
      this.mySessionService.logout()
        .then(() => {
            this.routetheuser.navigate(['/']);
            this.userLogged = false;
            console.log(this.userLogged)
        })
        .catch(() => {});
  }
 
  handleLogin(userFromApi) {
    console.log(this.userLogged,'handle')
      this.userLogged = true;
  }

}
