import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrewService } from 'src/app/services/crew.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crewpage',
  templateUrl: './crewpage.component.html',
  styleUrls: ['./crewpage.component.css']
})
export class CrewpageComponent {
chats!:string[];
welcome='';
user:any;
crew:any;
Cname:any
crewmembers!:any[];
  showerror: boolean=false;
  errormessage: string='';
  constructor(private userservice:UserService,private route:Router,private crewservice:CrewService){
    
    if(!this.userservice.currentUser){
      this.route.navigateByUrl('/login');
    }
    window.scrollBy(0,5000)
   // this.crew=this.crewservice.getrecentcrew;
   this.crew=this.crewservice.getcrewmembers;
   console.log(this.crew)
    let cname=this.crewservice.getrecentcrew;
this.Cname=cname;
    this.user=this.userservice.currentUser;
  console.log(cname)
  this.crewservice.getchats({cname}).subscribe((res:any)=>{
    if(res['msg']!=-1){

      this.chats=res;
    }
    else if(res['msg']==-1){
      alert("error")
      
    }
    else{
      this.welcome="let start to chat";
    }
  });
  }

  sendmessage(nmessage:string){
    nmessage=this.user.name+"  :"+nmessage;
    let crewname=this.Cname
    this.crewservice.chatnow({crewname,nmessage}).subscribe((res:any)=>{
      if(res['msg']!=-1){
        this.reloadmessages();
        
    }
    else{
      this.showerror=true;
      this.errormessage="Something went wrong, contact Okayberry";

    }
    })
    
  }

  reloadmessages(){
let cname=this.Cname;
    this.crewservice.getchats({cname}).subscribe((res:any)=>{
      if(res['msg']!=-1){
  
        this.chats=res;
      }
      else if(res['msg']==-1){
        alert("error")
        
      }
      else{
        this.welcome="let start to chat";
      }
    });

  }
  


}
