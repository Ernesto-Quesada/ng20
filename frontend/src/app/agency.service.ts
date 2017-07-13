
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AgencyService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  // getAgency() {
  //   return this.http.get('http://localhost:3000/agencies')
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
  getAgencies() {
    return this.http.get(this.BASE_URL + '/agencies')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
               
  }
  getAgency(id: number) {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }


}






