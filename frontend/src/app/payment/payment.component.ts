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
  error: any;
cucAmount: number;
usdAmount: number;
  constructor(private mySenderService: SenderService) {
  }

  ngOnInit() {
    return this.mySenderService.getProfile()
      .then((theUsercomingFromApi) => {
      this.user = theUsercomingFromApi;
      console.log('this.user', this.user)
      this.error = null;
  });
}
  onKeycuc() {
    this.usdAmount =  this.cucAmount * 1.12
  }
  onKeyusd() {
    this.cucAmount = this.usdAmount / 1.12
  }

}
