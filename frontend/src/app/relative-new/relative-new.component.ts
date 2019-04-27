import { Component, OnInit } from '@angular/core';
import { RelativeService} from '../services/relative.service';
import { SenderService} from '../services/sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relative-new',
  templateUrl: './relative-new.component.html',
  styleUrls: ['./relative-new.component.css']
})
export class RelativeNewComponent implements OnInit {
  newRelativeInfo: any = {};
  relative: any;
  user: any;
  relativeName: string;
  firstApell: string;
  secondApell: string;
  parentesco: string;
  addressRelative: string;
  cIdentidad: string;
  phoneRelative: string;
  error: any;

    constructor (private relativeService: RelativeService,
                 private mySessionService: SenderService,
                 private routetheuser: Router) { }

  ngOnInit(): void {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {
      this.user = userInfo;
      console.log('the user in RELATIVE', this.user)
    })
    .catch((err) => {console.log('user not logged')
        });
  }
  goBack() {
    history.back()
  }
  
  addNewRelative() {
    console.log('this.newRelativeInfo', this.newRelativeInfo)
   this.relativeService.addRelativeInService(this.newRelativeInfo)
   .then(() => {
     this.routetheuser.navigate(['/relatives']);
   })
    .catch((err) => {
    this.user = null;
    this.error = err;
    });
  }

}////////////////////////////////////////////////////////////


  // delete(agency): void {
  //   this.agencyService
  //       .delete(agency._id)
  //       .then(() => {
  //         this.agencies = this.agencies.filter(h => h !== agency);
  //         if (this.selectedAgency === agency) { this.selectedAgency = null; }
  //       });
  // }

