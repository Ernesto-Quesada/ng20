import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user: any;
  errorMessage: any;

  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {
      this.user = userInfo;
      this.routetheuser.navigate(['/profile']);
  })
  .catch((err) => { this.routetheuser.navigate(['/'])})
  }
}
