import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
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

  constructor(
              private mySessionService: SenderService,
              private routetheuser: Router) { }

  ngOnInit(): void {
    this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
       this.user = theUsercomingFromApi;
    this.getRelatives();
      console.log('the family  in this.getR', this.relatives)
    })
    .catch((err) => {console.log('user not logged')
        });
  }
  getRelatives(): void {
    this.mySessionService
        .getRelatives()
        .then((relatives) => {this.relatives = relatives;
        console.log('the fam in getR', this.relatives)
        })

  }
        onSelect(relative): void {
    this.selectedRelative = relative;
    console.log('selected Relative', this.selectedRelative)
  }

}
