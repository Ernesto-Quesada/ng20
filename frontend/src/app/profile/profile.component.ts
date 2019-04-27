import { Component, OnInit } from '@angular/core';
import { SenderService } from '../services/sender.service';
import { Router } from '@angular/router';
import { RelativeService } from '../services/relative.service'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {
     agencyInUseId: {}
  };
  responseFromAPI: any;
  userName: string;
  userLastName: string;
  relatives:any;
  errorMessage: any;
  agency: any;
  agencyId : string;
  hasRelatives: boolean;
  missingProperty: boolean;
  loadGif: boolean = false;
  alert: string;


  constructor(private mySessionService: SenderService,
              private routetheuser: Router,
              private relativeServive: RelativeService) { }

  ngOnInit() {
    this.loadGif = true;
      this.mySessionService.isLoggedIn()
      .then((userInfo) => {
        this.user = userInfo;
        console.log('userinfo', this.user)
        if (userInfo != null) {
          this.getRelatives();
           this.getProfile();
          //  this.redirectToSend(userInfo)
           this.loadGif = false;
        }
    })
    .catch((err) => { this.routetheuser.navigate(['/'])});
  }

  getRelatives(): void {
    this.relativeServive.getRelatives()
        .subscribe(response => {
          this.relatives = response.json();
          if (this.relatives.length > 0) {
            this.hasRelatives = true;
          } else {
            this.hasRelatives = false;
          }
        });
  }

  redirectToSend(user) {
    console.log('HERE', user)
    if (user.firstName != null &&  user.lastName != null && user.phone != null &&
      user.agencyInUseId != null && user.country != null ) {
        this.routetheuser.navigate(['/payment'])
      }
  }
//   nullPorperty(userInfo) {
//     for (const member in userInfo) {
//         if (userInfo[member] != null) {
//           console.log(userInfo[member]);
//           this.missingProperty = true
//         }
//     }

// }
// for (var property in object) {
//   if (object.hasOwnProperty(property)) {
//       // do stuff
//   }
// }


  getProfile() {
      this.mySessionService.getProfile()
      .then(value => {
        console.log('VVVVVS', value);
        if(value !=null){this.alert ="profile"}
        console.log(this.alert);
        this.agency = value.theUserProfile.agencyInUseId.nameAgency;
        this.agencyId = value.theUserProfile.agencyInUseId._id

      })

   }
  // deleteRelative(relativedIdDelete) {
  //   this.relativeServive.deleteRelative(relativedIdDelete)
  //   .then(value => {

  // })}

}
