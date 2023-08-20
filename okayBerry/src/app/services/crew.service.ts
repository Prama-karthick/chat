import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { messageI } from '../shared/messageI';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor(private http:HttpClient) { }



  setrecentcrew(res:any){
    
    localStorage.setItem('recentcrew',res);
    localStorage.setItem('cmembers',res.Members)
    localStorage.setItem('cname',res.CrewName)
  }

  get getrecentcrew(){
    return localStorage.getItem('cname');
  }

  get getcrewmembers(){
    return localStorage.getItem('cmembers');
  }

  createcrew(newcrew:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/crew/createcrew", newcrew)
    
  } 

  opencrew(crewcredentials:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/crew/opencrew", crewcredentials)
    
  }

  getchats(cname:any):Observable<any>{
 
    return this.http.post<any>("http://localhost:3000/api/crew/getchats", cname)
    
  } 
  
  chatnow(message:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/api/crew/chatnow", message)
    
  } 

}
