import { Injectable } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthFakeService {
  loggedIn=false;

isAuthenticate()
 {  const promise=new Promise(
    (resolve,reject)=>{
      setTimeout(()=>
      {
        resolve (this.loggedIn)         //resolve means it will redirect to destined path
                                        //reject means it not will redirect 
      },200);
    }
  );
  return promise;                       //return boolean
}

login()
{
  this.loggedIn=true;     //on click of login button,it will change the value of loggedIn.
}
logout()
{
  this.loggedIn=false;    //on click of login button,it will change the value of loggedIn.
}

  constructor() { }
}
