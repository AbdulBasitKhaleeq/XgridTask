import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {
  constructor(
    private router: Router, 
    private myAuthService: AuthService
) { }

canActivate(_route, _state: RouterStateSnapshot): boolean {
  if(this.myAuthService.isLoggedIn()) {
    return true;  
  }else{
  this.router.navigate(['/login']);
  return false;
  }

  return false;
}



}