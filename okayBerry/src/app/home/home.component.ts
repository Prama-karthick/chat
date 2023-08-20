import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CrewService } from '../services/crew.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
message="Login or Register";
user!:any;
show=false;
crewman=false;
loggedin=false;
  invalid: boolean=false;
  constructor(private userservice:UserService,private crewservice:CrewService,private route:Router){
    this.user=this.userservice.currentUser;
    
    if(this.user){
    this.message=this.user.name;
    this.loggedin=true;
    this.crewman=this.user.crewman;
    console.log(this.user);
    }
  }

  checkcrewname(cname:string){
    let mail=this.user.email;
    
    this.crewservice.opencrew({cname,mail}).subscribe((res:any)=>{
      if(res['msg']!=-1 && res['msg']!=-2){

        this.crewservice.setrecentcrew(res);
      this.route.navigateByUrl("/crewPage");//routing to home page
    }
    else if(res['msg']==-2){
    
      this.invalid=true;
      this.message=this.message+" You are not a member of the group";
    }
    else{
      this.invalid=true;
      this.message=this.message+" Check your crew name....";

    }
    })
  }

}
