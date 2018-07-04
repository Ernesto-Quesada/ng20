import { Component, OnInit } from '@angular/core';
import { RelativeService } from '../services/relative.service'
import { SenderService } from '../services/sender.service';
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

  constructor(private relativeServive: RelativeService,
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
    this.relativeServive
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
