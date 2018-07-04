import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
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

  private searchTerms = new Subject();
  agencies: Observable<any[]>;
  selectedAgency: any;
  

  constructor(private agencySearchService: AgencySearchService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term) {
    console.log('ageniiiiiii', term);
    this.searchTerms.next(term);
    console.log(this.agencies)
  }
  
ngOnInit(): void {
    this.agencies = this.searchTerms
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
        console.log('ERROR MES',error);
        return Observable.of<any[]>([]);
      });
    console.log('agen222222yyyyy',this.agencies);
    console.log('agen222222',this.searchTerms);
  }
gotoDetail(agency) {
    // const link = ['/detail', agency._id];
    // this.router.navigate(link);
    this.selectedAgency = agency;
  }

}
