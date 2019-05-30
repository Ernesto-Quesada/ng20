import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/sender.service';
import { Router } from '@angular/router';
import { RelativeService} from '../services/relative.service';
import { ActivatedRoute } from '@angular/router';
import { RelativeModel } from '../models/relative';
@Component({
  selector: 'app-editrelative',
  templateUrl: './editrelative.component.html',
  styleUrls: ['./editrelative.component.css']
})
export class EditRelativeComponent implements OnInit {
editRelativeInfo: any = {};

user: any;
userName: string;
userLastName: string;
phone: string;
error: any;
relativeId: string;
response: any;
relative: any = {};

  constructor(private mySessionService: UserService,
              private routetheuser: Router,
             private _relativeService: RelativeService,
             private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        // console.log(params.get('id'));
        this.relativeId = params.get('id');
      this._relativeService.getSingleRelative(this.relativeId).subscribe(response => {
        this.response = response.json();
        this.relative = this.response.theRelative
        this.editRelativeInfo._id = this.response.theRelative._id
        console.log('relative', this.response.theRelative);

      })
      });
  //   this.mySessionService.isLoggedIn()
  //   .then((userInfo) => {
  //       this.user = userInfo;
  //       console.log('editinfo', this.user)
  //       this.userName = this.user.firstName.toUpperCase();
  //       this.userLastName = this.user.lastName.toUpperCase();
  //       this.phone = this.user.phone;
  //       console.log('this.user phone', this.phone);
  //       })
  // .catch((err) => { this.routetheuser.navigate(['/profile'])})
  }
  
  
  editRelative() {
    console.log(this.editRelativeInfo,'hgchgchgc')
    this._relativeService.editRelative(this.editRelativeInfo)
   .then(() => {
    this.routetheuser.navigate(['/relatives']);
   })
  
  }


}
