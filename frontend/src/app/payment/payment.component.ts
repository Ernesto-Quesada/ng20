import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
cucAmount: number;
usdAmount: number;
  constructor() {
  }

  ngOnInit() {
  }
  onKeycuc() {
    this.usdAmount =  this.cucAmount* 1.12
  }
  onKeyusd() {
    this.cucAmount = this.usdAmount / 1.12
  }
  

}
