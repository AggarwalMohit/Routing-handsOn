import { Injectable } from '@angular/core';
import {CanActivate,
   ActivatedRouteSnapshot, 
   RouterStateSnapshot, 
   Router}    from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { AuthFakeService } from './auth-fake.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  constructor(private authfakeservice:AuthFakeService,
    private route:Router) { }

  canActivate(route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
  {
    return this.authfakeservice.isAuthenticate().then(
      (authenticate:boolean)=>                                    //this 'then' points towards the promise 
      {
        if(authenticate){                                        //this 'authenticate' will have returned value of promise in the Auth-fake service       
          return true;                                           //this will return boolean T/F to AppRouting Module in canActivate gaurd in the route. 
        }
        else
        {
           this.route.navigate(['/']);
        }
      }
    )
  }
  canActivateChild(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
    {
      return this.canActivate(route,state)
    }
  
}
