import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
cucAmount: Int16Array;
USD: Number;
  constructor() {
  }

  ngOnInit() {
  }
  // onKey(value): {
  //   this.USD =  parseFloat(value)+ parseFloat(value * 0.12)
  // }
  

}
