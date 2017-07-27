import { Component, OnInit, Output, Input } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';
import { RelativeService} from '../relative.service'
@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.css']
})
export class RelativeComponent implements OnInit {
  @Input() relativeToDetails: any;
  @Input() user: any;
  relatives: any;
  error: any;
  constructor(private mySessionService: SenderService, 
              private routetheuser: Router,
              private relativeService: RelativeService) { }

  ngOnInit() {
  //   this.mySessionService.isLoggedIn()
  //   .then((user) => {this.relatives = relativesToDetails;
  //     console.log('relatives', this.relatives)
  // })
  // .catch((err) => { this.routetheuser.navigate(['/signup'])})
}
   selectRelative(id) {
     this.relativeService.selectRelative(id)
     .then((theUserFromApi) => {
     this.routetheuser.navigate(['/payment']);
   this.error = null;

    })
    .catch((err) => {
      this.relatives = null;
      this.error = err;
    });
  }




}
