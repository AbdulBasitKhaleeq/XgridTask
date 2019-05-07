import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private loginUrl = "http://127.0.0.1:3000/user/login/";
  private singUpUrl = "http://127.0.0.1:3000/user/signup/";
  private forgetPasswordUrl = "http://127.0.0.1:3000/forgetpass";
  //private userProfileDetailsUrl = "http://127.0.0.1:3000/api/user-detail/";
  

  constructor(private httpClient: HttpClient, private router:Router) {}


  loin(credentials : any){
    return this.httpClient.post(this.loginUrl, 
      credentials)
      .map(response => {
        console.log(response["token"]);
        let result:any = response;
        if(result && result.token) { 
          localStorage.setItem('token', result.token);
          return true;
        }else{
        return false;
      }
      });
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
     return tokenNotExpired();
  }

 signup(userObject : any ){
    return this.httpClient.post(this.singUpUrl, userObject)
    .map(response => {
      console.log(response);
      let result:any = response;
      if(result ) { 
        return true;
      }
      return false;
    });
  }


  updatePassword( passObject : any ){
    return this.httpClient.put(this.forgetPasswordUrl,passObject).map((res: Response) => {
      return res;
      });
  }

}