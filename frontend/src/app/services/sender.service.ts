import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class SenderService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = environment.API_URL;
  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"

  constructor(private http: Http) {}

  loggedIn(userInfo) {
    console.log('in login con userinfo')
    this.loggedInSource.next(userInfo);
  }

// ------isLoggedIn  start-----
  isLoggedIn () {
    console.log('APIURL', this.BASE_URL)
    return this.http.get( this.BASE_URL + '/api/loggedin', {withCredentials: true})
    .toPromise()
    .then(res => res.json());
  }
  // ------isLoggedIn  end-----

  // =========================
  // ======= LOGIN ===========
  // ==========================
  login (credentials) {
    return this.http.post(this.BASE_URL + '/api/login', credentials,
     {withCredentials: true
     })
     .toPromise()
     .then((res) => {
       console.log('servicio return from login',res.json())
       res.json();
      });
  }

  // =========================
  // ======= SIGN UP ===========
  // ==========================
  signup (user) {return this.http.post(this.BASE_URL + '/api/signup', user,
       { withCredentials: true })
       .toPromise()
       .then(res => res.json());
  }

  // =========================
  // ======= LOG OUT ===========
  // ==========================
  logout() {return this.http.post(this.BASE_URL + '/api/logout',{},
         { withCredentials: true })
         .toPromise()
         .then(res => res.json());
  }

  handleError(e) {return Observable.throw(e.json().message);
  }

  // =========================
  // ======= getProfile ===========
  // ==========================
  getProfile() {return this.http.get(this.BASE_URL + '/api/profile',
              {withCredentials: true})
              .toPromise()
              .then(res => res.json());
  }
  // getProfile(): Observable<any> {
  //   return this.http.get(this.BASE_URL + '/api/profile',
  //   {withCredentials: true}
  //   )
  // }

  // =========================
  // ======= edit Profile ===========
  // ==========================
  editProfile(editInfo) {return this.http.post(this.BASE_URL + '/api/profile/edit', editInfo,
              {withCredentials: true})
              .toPromise()
              .then(res => res.json())
  }
}







