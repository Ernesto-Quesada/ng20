
import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountPlaidService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  
  //get public data for plaid webview
  accountPlaidHome() {
    return this.http.get(this.BASE_URL + '/accountPlaid')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  //get account data
  get_access_token(publicToken: string) {
    // const body = 'request='+ publicToken;
    // console.log('{{{{{{{{{{', body);

    // const headers = new Headers();
    // console.log('>>>>>>>', headers)
    // headers.append('Content-Type', 'application/json');

    return this.http.post(this.BASE_URL + `/accountPlaid/get_access_token`, {publicToken: publicToken},
                              {withCredentials: true})
                          // JSON.stringify({'publicToken': publicToken}),
                          // { headers: headers })//already has 3 parameter ..no more accepted
                    .toPromise()
                    // .then(()=>{
                    //   response => response.json()
                    //   })
                    // better this ..changed on Jul 22
                    .then((response) => {
                      console.log('?????????' , response)
                      response.json() })
                    .catch(() => {
                        console.log(this.handleError) 
                      });
  }

  get_accounts() {
    return this.http.post(this.BASE_URL + '/accountPlaid/accounts/get', null,
                    {withCredentials: true})
                    .toPromise()
                    .then(response => response.json())
                    .catch(()=> console.log(this.handleError));
  }





  // getAgency(id: number) {
  //   const url = `${this.BASE_URL}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);
  // }
}






