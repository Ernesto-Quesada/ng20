import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.css']
})
export class RelativeComponent implements OnInit {
family = {};
  relative: any;
  error: any;
  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

  ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((relatives) => {this.routetheuser.navigate(['/profile']);
  })
  .catch((err) => { this.routetheuser.navigate(['/signup'])})
}
relativ() {
    const thePromise = this.mySessionService.login(this.family);
    thePromise.then((relatives) => {
      this.relative = relatives;
      this.error = null;

    });
    thePromise.catch((err) => {
      this.relative = null;
      this.error = err;
    });
  }




}
