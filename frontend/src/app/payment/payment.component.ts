import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  user: any;
  sending:any;
  error: any;
  relativeSend:any;
  relatives:any;
cucAmount: number;
usdAmount: number;
  constructor(private mySenderService: SenderService, private routetheuser: Router) { }

ngOnInit() {
    this.mySenderService.isLoggedIn()
    .then((userInfo) => {
this.user = userInfo
console.log('ASDFGHJK', this.user);
this.getRelatives(userInfo)
        // this.mySenderService.getPrle()
        //       .then((theUsercomingFromApi) => {
        //       this.user = theUsercomingFromApi.theUserProfile;
        //       this.error = null;
        //       this.routetheuser.navigate(['/portal']);
        //     })
        //     .catch((err) => {
        //       const apiInfo = err.json();
        //             this.error = apiInfo.message;
        //     });

      // this.routetheuser.navigate(['/profile']);
  })
  .catch((err) => { this.routetheuser.navigate(['/'])});
  
  }
  onKeycuc() {
    this.usdAmount =  this.cucAmount * 1.12;
  
  }
  onKeyusd() {
    this.cucAmount = this.usdAmount / 1.12
  }
  getRelatives(userInfo): void {
    this.mySenderService
        .getRelatives()
        .then((relatives) => {this.relatives = relatives;
        console.log('the fam in getR', this.relatives)
        this.relatives.forEach((oneRelative)=>{
          if (oneRelative._id === this.user.relativeSendingNow){
            this.sending =oneRelative.name;
            console.log('sending',this.sending)
          }
        })

  })



}
}
