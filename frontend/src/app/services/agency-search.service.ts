import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AgencySearchService {
  // BASE_URL: string = 'http://localhost:3000';
BASE_URL: string = environment.apiUrl
  constructor( private http: Http) { }

  search(term): Observable<any[]> {
    // console.log('from service',term)
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    // console.log('URL', this.BASE_URL + `/api/agency/?name=${term}`)
    return this.http
              // .get(this.BASE_URL + `/api/agency/?name=${term}`)
              .get(this.BASE_URL + `/api/agencies/${term}`)
              .map(response => response.json() );
  }

}
