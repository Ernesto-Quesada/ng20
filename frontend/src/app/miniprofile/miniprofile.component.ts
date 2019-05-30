import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.css']
})
export class MiniprofileComponent implements OnInit {
  user: any = {
     agencyInUseId: { _id: '',
                    nameAgency: ''}
  };
  errorMessage: any;

  constructor(private mySessionService: UserService, private routetheuser: Router) { }

ngOnInit() {
    this.mySessionService.isLoggedIn()
  //   .then((userInfo) => {

  //       this.mySessionService.getProfile()
  //             .then((theUsercomingFromApi) => {
  //             // console.log("asdasdasdasdasdasdas" +theUsercomingFromApi.theUserProfile.firstName)
  //             this.user = theUsercomingFromApi.theUserProfile;
  //             this.errorMessage = null;
  //             this.routetheuser.navigate(['/portal']);
  //           })
  //           .catch((err) => {
  //             const apiInfo = err.json();
  //                   this.errorMessage = apiInfo.message;
  //           });

  //     // this.routetheuser.navigate(['/profile']);
  // })
  // .catch((err) => { this.routetheuser.navigate(['/'])});
  
  }

}
