
import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RelativeService {
private headers = new Headers({'Content-Type': 'application/json'});
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
    selectRelative(id) {
    return this.http.post(this.BASE_URL + `/relative/${id}/select`, {},
    /// with credentials es siempre el tercero
                          {withCredentials: true} )
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);

  }
  addRelativeInService (relative) {
    console.log('relative________)))))))from service', relative)
    return this.http.post(this.BASE_URL + `/relative/new`,
         relative,
         { withCredentials: true }
         )
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
  }

}
