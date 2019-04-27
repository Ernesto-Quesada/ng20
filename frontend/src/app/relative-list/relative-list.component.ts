import { Component, OnInit } from '@angular/core';
import { RelativeService } from '../services/relative.service'
import { SenderService } from '../services/sender.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-relative-list',
  templateUrl: './relative-list.component.html',
  styleUrls: ['./relative-list.component.css']
})
export class RelativeListComponent implements OnInit {
relatives: any;
selectedRelative: any;
user: any;
errorMessage: any;
relativeTobeDeleted: string;
relativeName: string;
relativeSelected: string;
error: string;
sendingToRelative: string;
addCheckedIcon: boolean = false;
relativeId:string;


  constructor(private relativeService: RelativeService,
              private mySessionService: SenderService,
              private routetheuser: Router) { }

  ngOnInit(): void {
    this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
        this.user = theUsercomingFromApi;
        console.log('theuser',this.user);
        this.sendingToRelative = this.user.relativeSendingNow;
        // console.log(this.sendingToRelative);
        // console.log( typeof this.sendingToRelative)

        this.getRelatives();
        console.log('the family  in this.getR', this.relatives)
      })
      .catch((err) => {console.log('user not logged')
      });
  }
  // relativeDetails(relativeId) {
  // }
  

  getRelatives(): void {
    this.relativeService.getRelatives()
      .subscribe(response => {
        console.log('RELATIVES>>>>>', response.json());
        this.relatives = response.json();
      })
  }

  
  setRelativeToSend(relativeId, relativeName) {

      // if ( this.sendingToRelative !== relativeId ) {
      //   this.addCheckedIcon = !this.addCheckedIcon
      // }
    this.relativeId = relativeId
     this.addCheckedIcon = true;
    this.relativeName = relativeName

    this.relativeService.selectRelative(relativeId)
    .then((theUserFromApi) => {
    console.log('THEUSERFROM api response RELATIVE', theUserFromApi)
    // this.routetheuser.navigate(['/payment']);
    this.error = null;
    })
    .catch((err) => {
    this.relatives = null;
    this.error = err;
    });
    }

// setRelativeToDelete(relativeId, relativeName) {
//   console.log('this.relativeTobeDeleted ',this.relativeTobeDeleted )
//   // this.relativeTobeDeleted = relativeId;
//   this.relativeSelected = relativeId;
//   this.relativeName = relativeName
//   console.log('this.relativeTobeDeleted ', this.relativeTobeDeleted )
// }
  // deleteRelative() {
  //   this.relativeService.deleteRelative(this.relativeTobeDeleted)
  //   .then(value => {
  //     console.log(value)
  //     this.relatives = value;

  // })}

}
