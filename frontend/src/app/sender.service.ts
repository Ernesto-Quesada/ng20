import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SenderService {
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // signup (user) {
  //   const theOriginalPromise = this.http.post('http://localhost:3000/signup', user).toPromise();

  //   const theParsedPromise = theOriginalPromise.then((result) => {
  //     return result.json();
  //   });

  //   return theParsedPromise;
  // }
  signup (user) {
    this.http.post(this.BASE_URL + '/signup' , user).subscribe();
  }

login (credentials) {
    return this.http.post('http://localhost:3000/login', credentials, {withCredentials: true} )
    .toPromise()
    .then((res) => res.json());
  }


  isLoggedIn () {
  return this.http
  .get(this.BASE_URL + '/loggedin',
   {withCredentials: true}
   )
      .toPromise()
      .then(res => res.json());
  }


  // logout() {
  //   return this.http.post(`/logout`, {})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }


  getProfile() {
    return this.http.get(this.BASE_URL + '/profile',
    {withCredentials: true}
    )
      .map(res => res.json())
      .catch(this.handleError);
  }


}




