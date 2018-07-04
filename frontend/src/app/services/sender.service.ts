import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class SenderService {
  // BASE_URL: string = 'http://localhost:3000';
    BASE_URL: string = environment.API_URL;


  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"

  constructor(
    private http: Http
    ) { }

  loggedIn(userInfo) {
    // next line recieve the user info and next pass that
    // info to 
    this.loggedInSource.next(userInfo);
  }

// ------isLoggedIn  start-----
  isLoggedIn () {
    console.log('APIURL', this.BASE_URL)
  return this.http
  .get(
    this.BASE_URL + '/api/loggedin',
   {withCredentials: true}
   )
    .toPromise()
    .then(res => res.json());
  }
// ------isLoggedIn  end-----


login (credentials) {
    return this.http
    .post(
      this.BASE_URL + '/api/login',
      credentials,
     {withCredentials: true}
     )
    .toPromise()
    .then((res) => res.json());
  }




  signup (user) {
    return this.http
    .post(
        this.BASE_URL + '/api/signup',
         user,
         { withCredentials: true }
         )
         .toPromise()
        .then(res => res.json());
  }

logout() {
      return this.http
        .post(
          this.BASE_URL + '/api/logout',
          {},
          { withCredentials: true }
        )
        .toPromise()
        .then(res => {
          res.json()
        });
  }
  handleError(e) {
    return Observable.throw(e.json().message);
  }




  getProfile() {
    return this.http.get(this.BASE_URL + '/api/profile',
    {withCredentials: true}
    )
      .toPromise()
        .then(res => res.json());
  }
      // ---EDIT PROFILE-----
  editProfile(editInfo) {
      return this.http
      .post(this.BASE_URL + '/api/profile/edit',
      editInfo,
      {withCredentials: true}
    )
      .toPromise()
        .then(res => res.json());

      }


}







