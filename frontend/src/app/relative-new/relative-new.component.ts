import { Component, OnInit } from '@angular/core';
import { RelativeService} from '../relative.service';
import { SenderService} from '../sender.service';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-relative-new',
  templateUrl: './relative-new.component.html',
  styleUrls: ['./relative-new.component.css']
})
export class RelativeNewComponent implements OnInit {
newRelativeInfo = { relativeName: '',
                    firstApell: '',
                    secondApell: '',
                    parentesco: '',
                    addressRelative: '',
                    cIdentidad: '',
                    phoneRelative: '',
                    // emailRelative: '',

                }
relative: any;
user: any;
error: any;
    constructor(
              private relativeService: RelativeService,
              private mySessionService: SenderService,
              private routetheuser: Router) { }

  ngOnInit(): void {
    this.getRelatives();
    this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
      this.user = theUsercomingFromApi;
      console.log('the user in RELATIVE', this.user)
    })
    .catch((err) => {console.log('user not logged')
        });
  }
  getRelatives(): void {
    this.mySessionService
        .getRelatives()
        .then((relatives ) => {
          this.relative = relatives;
        console.log('Relative', this.relative)});
  }
  addRelative(relativeInfoForm) {

    this.newRelativeInfo =
    {
    relativeName: relativeInfoForm.value. relativeName,
    firstApell: relativeInfoForm.value.firstApell,
    secondApell: relativeInfoForm.value.secondApell,
    cIdentidad: relativeInfoForm.value.cIdentidad,
    phoneRelative:  relativeInfoForm.value. phoneRelative,
    // email: relativeInfoForm.value.emailRelative,
    addressRelative:  relativeInfoForm.value.addressRelative,
    parentesco: relativeInfoForm.value. parentesco,
    }
    console.log('IIINFO', this.newRelativeInfo)
   this.relativeService.addRelativeInService(this.newRelativeInfo)
   .then((theNewRelativeFromApi) => {
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

