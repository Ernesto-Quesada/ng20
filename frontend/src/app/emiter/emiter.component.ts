import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {
@Output() notify: EventEmitter<any> = new EventEmitter<any>()
onClick() {
  this.notify.emit('Nested component');
    console.log('<><><><>', this.notify)
}
  ngOnInit() {
  }
}
