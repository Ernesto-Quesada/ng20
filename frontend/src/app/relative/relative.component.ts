import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';
import { RelativeService} from '../services/relative.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.css']
})
export class RelativeComponent implements OnInit {
  // @Input() relativeToDetails: any;
  // @Input() user: any;
  relatives: any;
  error: any;
  relative= { theRelative: {},
              userProfile: {}};
  relativeId: any;
  relativeTobeDeleted: string;
  relativeName: string;
  user: any={};

  constructor(private mySessionService: UserService,
              private routetheuser: Router,
              private relativeService: RelativeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  this.mySessionService.isLoggedIn()
  .then((userInfo) => { this.user = userInfo;
    
  console.log('the user in RELATIVE', this.user.relativeSendingNow)})
  .catch((err) => {this.routetheuser.navigate(['/signup'])
  });


  this.route.paramMap.subscribe(params => {
    console.log(params.get('id'));
    this.relativeId = params.get('id');
    this.relativeService.getSingleRelative(this.relativeId).subscribe(response => {
    this.relative = response.json();
    console.log('relative detail', this.relative)
      })
    });
 }
  //  selectRelative(id) {
  //            console.log('THEUSERFROM RELATIVE', id);

  //    this.relativeService.selectRelative(id)
  //     .then((theUserFromApi) => {
  //     console.log('THEUSERFROM api response RELATIVE', theUserFromApi)
  //   this.routetheuser.navigate(['/payment']);
  //  this.error = null;

  //   })
  //   .catch((err) => {
  //     this.relatives = null;
  //     this.error = err;
  //   });
  // }

  setRelativeToDelete(relativeId, relativeName) {
      console.log('this.relativeTobeDeleted ',this.relativeTobeDeleted )
      this.relativeTobeDeleted = relativeId;
      
      this.relativeName = relativeName
      console.log('this.relativeTobeDeleted ', this.relativeTobeDeleted )
    }

  deleteRelative() {
    this.relativeService.deleteRelative(this.relativeTobeDeleted)
    .then(value => {
      console.log(value)
      this.relatives = value;
    this.routetheuser.navigate(['/relatives']);

  })}




}
