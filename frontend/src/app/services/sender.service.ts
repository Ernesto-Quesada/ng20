import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = environment.apiUrl;
  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"

  constructor(private http: HttpClient) {}

  loggedIn(userInfo) {
    console.log('in login con userinfo')
    this.loggedInSource.next(userInfo);
  }

// ------isLoggedIn  start-----
  isLoggedIn () {
    return this.http.get( this.BASE_URL + '/api/loggedin', {withCredentials: true})
    .toPromise()
    ;
  }
  // ------isLoggedIn  end-----

  // =========================
  // ======= LOGIN ===========
  // ==========================
  login (credentials): Observable<any> {
    console.log(credentials)
    let params = new HttpParams();
    params = params.append( 'emailInput', credentials.loginEmailInput);
    return this.http.get( this.BASE_URL + '/login', {params})
    //  {withCredentials: true
    //  })
  }

  // =========================
  // ======= SIGN UP ===========
  // ==========================
  signup (user): Observable<any> {
    const httpOptions = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    return this.http.post(this.BASE_URL + '/login', user, httpOptions)
  }

  // =========================
  // ======= LOG OUT ===========
  // ==========================
  logout(): Observable<any> {
    return this.http.post(this.BASE_URL + '/api/logout', {},
         { withCredentials: true })
  }

  handleError(e) {return Observable.throw(e.json().message);
  }

  // =========================
  // ======= getProfile ===========
  // ==========================
  getProfile(): Observable<any> {
    return this.http.get(this.BASE_URL + '/profile',
              {withCredentials: true})
  }
  // getProfile(): Observable<any> {
  //   return this.http.get(this.BASE_URL + '/api/profile',
  //   {withCredentials: true}
  //   )
  // }

  // =========================
  // ======= edit Profile ===========
  // ==========================
  editProfile(editInfo): Observable<any> {
    return this.http.post(this.BASE_URL + '/profile/edit', editInfo,
              {withCredentials: true})
  }
}







