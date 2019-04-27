import { Component, OnInit } from '@angular/core';
import {AgencyService} from '../services/agency.service'
import { SenderService } from '../services/sender.service';
import { AgencySearchService} from '../services/agency-search.service';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';

import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agencies: any
  selectedAgency: any;
  user: any;
  // searchedterm: string;

  agency$: Observable<any>;
  event: any;
  searchTerms = new Subject<string>();

  constructor( private agencyService: AgencyService,
              private mySessionService: SenderService,
              private _agencySearchService: AgencySearchService) { }
ngOnInit(): void {
      this.getAgencies();
      this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
        this.user = theUsercomingFromApi;
        console.log('the user in agencies', this.user)
      })
      .catch((err) => {console.log('user not logged')
      });
  }
  getAgencies(): void { this.agencyService
        .getAgencies()
        .then((agency) => {
          this.agencies = agency;
          console.log('AGENCIES', this.agencies)});
  }
  showSearchedAgency($event) {
    this.event = $event
    console.log('this.event', typeof this.event)
  }

  delete(agency): void {
    this.agencyService
        .delete(agency._id)
        .then(() => {
          this.agencies = this.agencies.filter(h => h !== agency);
          if (this.selectedAgency === agency) { this.selectedAgency = null; }
        });
  }

  onSelect(agency): void {
    this.selectedAgency = agency;
  }
// search(term: string): void {
//     this.searchTerms.next(term);
//   }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.agencyService.create(name)
  //     .then(agency => {z
  //       this.agencies.push(agency);
  //       this.selectedagency = null;
  //     });
  // }

  // ngOnInit(): void {
  //   this.getagencies();
  // }
  // agencyIsSelected(): void {
  //   console.log('agency', this.selectedAgency)
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedagency.id]);
  // }
    // Push a search term into the observable stream.
  // search(term: string): void {
  //     this.searchTerms.next(term);
  //   }
  // search(searchTerms) {
  //   console.log(searchTerms)
  //    this._agencySearchService.search(searchTerms)
  //   //  .then(searched => this.searchedterm = searched)
  // }

}
