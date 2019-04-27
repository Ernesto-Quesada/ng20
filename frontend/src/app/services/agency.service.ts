
import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class AgencyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // tslint:disable-next-line:no-inferrable-types
  // BASE_URL: string = 'http://localhost:3000';
 BASE_URL: string = environment.API_URL;
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
    return this.http.get(this.BASE_URL + '/api/agencies')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getAgencyDetailsinService(id) {
    console.log('from agency service', id);
    return this.http.get(this.BASE_URL + `/api/agency/${id}`)
  }


  selectAgen(id) {
    return this.http.post(this.BASE_URL + `/api/agency/${id}/select`, {},
    ///with credentials es siempre el tercero
                          {withCredentials: true} )
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);

  }








  delete(id: number): any  {
    // const url = `${this.BASE_URL}/${id}`;
    // return this.http.delete(url, {headers: this.headers})
    //   .toPromise()
    //   .then(() => null)
    //   .catch(this.handleError);
    return this.http.delete(`${this.BASE_URL}/api/agency/${id}`)
      .toPromise()
      .then(response => response.json())
               .catch(this.handleError);
  }

}






