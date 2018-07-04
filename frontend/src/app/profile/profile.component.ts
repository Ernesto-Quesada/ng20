import { Component, OnInit } from '@angular/core';
import { SenderService } from '../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
     agencyInUseId: {}
  };
  errorMessage: any;

  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {

        this.mySessionService.getProfile()
              .then((theUsercomingFromApi) => {
              // console.log("asdasdasdasdasdasdas" +theUsercomingFromApi.theUserProfile.firstName)
              this.user = theUsercomingFromApi.theUserProfile;
              this.errorMessage = null;
              // this.routetheuser.navigate(['/portal']);
            })
            .catch((err) => {
              const apiInfo = err.json();
                    this.errorMessage = apiInfo.message;
            });

      // this.routetheuser.navigate(['/profile']);
  })
  .catch((err) => { this.routetheuser.navigate(['/'])});
  
  }

  editUserProfile(){
    
  }

}
