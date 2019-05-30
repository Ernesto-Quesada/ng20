import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
editedProfileInfo: any = {}
user: any;
userName: string;
userLastName: string;
phone: string;
error: any;



  // agencyInUseId: "5971afcbf3f3c23d7c27c94b"
  // country: "US"
  // createdAt: "2018-06-28T02:26:53.604Z"
  // email: "ernesqr@yahoo.com"
  // encryptedPassword: "$2a$10$fUF2Mhl02wSQeBFcfuyRRe6NHWN5Biirch0A6nwYCiM1RKAbw9jH2"
  // firstName: "Ernesto"
  // lastName: "Quesada"
  // name: "ernesto"
  // phone: "7863665326"
  // updatedAt: "2018-08-01T03:33:54.449Z"
  // __v: 0
  // _id: "5b34476df7492a138793219c"

  constructor(private mySessionService: UserService, private routetheuser: Router) { }
    ngOnInit() {
    this.mySessionService.isLoggedIn()
    // .then((userInfo) => {
    //     this.user = userInfo;
    //     console.log('editinfo', this.user)
    //     this.userName = this.user.firstName.toUpperCase();
    //     console.log('ANME',this.userName)
    //     this.userLastName = this.user.lastName.toUpperCase();
    //     this.phone = this.user.phone;
    //     console.log('this.user phone', this.phone);

    //     })
  .catch((err) => { this.routetheuser.navigate(['/profile'])})
  }

  editProfile() {
    console.log('EDUTION',this.editedProfileInfo )
   this.mySessionService.editProfile(this.editedProfileInfo)
  //  .then(() => {
  //   this.routetheuser.navigate(['/profile']);
  //  })
  //   {
  //     // console.log('PPPPPPPPPPPPPP', this.editedProfileInfo)
  //    this.routetheuser.navigate(['/profile']);
  //  }
  }


}
