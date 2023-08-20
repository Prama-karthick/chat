import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrewService } from 'src/app/services/crew.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  Cname: any;
  showerror: boolean=false;
  errormessage: string='';


  constructor(private userservice:UserService,private route:Router,private crewservice:CrewService){ 
    this.user=this.userservice.currentUser;
    let cname=this.crewservice.getrecentcrew;
    this.Cname=cname;
    
    this.route.navigateByUrl('/crewPage');
   }




  sendmessage(nmessage:string){
    nmessage=this.user.name+"  :"+nmessage;
    let crewname=this.Cname
    this.crewservice.chatnow({crewname,nmessage}).subscribe((res:any)=>{
      if(res['msg']!=-1){
      this.route.navigateByUrl('/profile');
    }
    else{
      this.showerror=true;
      this.errormessage="Something went wrong, contact Okayberry";

    }
    })
  }

}
