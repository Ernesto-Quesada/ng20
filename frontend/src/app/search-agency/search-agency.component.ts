import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AgencySearchService } from '../services/agency-search.service';

@Component({
  selector: 'app-search-agency',
  templateUrl: './search-agency.component.html',
  styleUrls: ['./search-agency.component.css'],
  providers: [AgencySearchService]
})
export class SearchAgencyComponent implements OnInit {
  @Output() searchedItem = new EventEmitter<any>();

  private searchTerms = new Subject();
  agency$: Observable<any[]>;
  selectedAgency: any;
  constructor(private agencySearchService: AgencySearchService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term) {

    this.searchTerms.next(term);
    if (term !== null) {
      this.searchedItem.emit(this.agency$);
    }
    if (term == null || term === "" ){ this.searchedItem.emit('')}
  }

ngOnInit(): void {
  // console.log('inside ngOnit s-a-c',this.searchTerms)
    this.agency$ = this.searchTerms
     .debounceTime(300)
     .distinctUntilChanged()
      .switchMap(term => {
        const searchAjax  = this.agencySearchService.search(term);
        // searchAjax.subscribe(res => console.log('holaaaaaaaaaaaaa', res))
        return term ? searchAjax
                    : Observable.of<any[]> ([])
      })
      .catch(error => {
        // TODO: add real error handling
        console.log('ERROR MES', error);
        return Observable.of<any[]>([]);
      });
      console.log(this.searchTerms)
  }
gotoDetail(agency) {
    // const link = ['/detail', agency._id];
    // this.router.navigate(link);
    this.selectedAgency = agency;
  }

}
