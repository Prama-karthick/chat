import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userinterface } from '../userinterface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { NewuserI } from '../shared/newuser-i';
import * as moment  from "moment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user:any;
 
  constructor(private http:HttpClient) {  }
  localurl="http://localhost:3000/api"
  globalurl="https://okayberry.onrender.com/api";
  url=this.globalurl;
  
  login(userLogin:Userinterface):Observable<any>{
     this.user=userLogin;
    return this.http.post<any>(this.url+"/users/login", userLogin)
    
}

register(newuser:NewuserI):Observable<any>{
  this.user=newuser;
  return this.http.post<any>(this.url+"/users/register", newuser)
  
} 

viewfriends(usermail:any):Observable<any>{

 return this.http.post<any>(this.url+"/users/viewfriends", usermail)
 
}


setSession(response: any){
  const expiresAt = moment().add(response.expiresIn,'second');

  localStorage.setItem('username', response.name);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
}


setUser(res:any){
  this.user=res;
  this.setSession(res);
}

public isLoggedIn() {
  const res=this.getExpiration()
  if(res==0){
    return false;
  }
  else{
    return moment().isBefore(res);
  }
}

getExpiration() {

  if(localStorage.getItem("expires_at")===null){
    return 0;
  }
  else{
  const expiration = localStorage.getItem("expires_at") || '{}';
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
  }

}   


get currentUser(){
  return this.user;
}  

}
