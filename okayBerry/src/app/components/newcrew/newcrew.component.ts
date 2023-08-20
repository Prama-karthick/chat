import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrewService } from 'src/app/services/crew.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newcrew',
  templateUrl: './newcrew.component.html',
  styleUrls: ['./newcrew.component.css']
})
export class NewcrewComponent {
user:any
  show: boolean =false;
  cname: any;
  constructor(private userservice:UserService,private route:Router, private crewservice:CrewService){
    window.scroll(0,0);
    if(!this.userservice.currentUser){
      this.route.navigateByUrl('/login');
    }
    
   this.user= this.userservice.currentUser
  }
  newCrewForm= new FormGroup({
    crewname:new FormControl('',[Validators.required]),
    Members: new FormArray([],[Validators.required])
  })

  get Members() {
    return (<FormArray>this.newCrewForm.get('Members')).controls;
  }
  
  limitNotReached:boolean=true;
  n: number=0;
  message:string='';
  addmember(){
    this.n= this.n+1
    if(this.n<11){
      const member= new FormGroup({
        name: new FormControl('', [Validators.required]),
        mail: new FormControl('', [Validators.required]),
      });
      (<FormArray>this.newCrewForm.get('Members')).push(member);
    }
    else{
      this.limitNotReached=false;
    }
    if(this.n==10){
      this.limitNotReached=false;
    }
    
  }

submit(){
  this.show=true;
  this.cname=this.newCrewForm.value.Members;
  if(this.n==0){
    this.message="Atleast one member should be there to talk....?";
  }
  else if(!this.newCrewForm.valid){
    this.message="Please fill all the fields for each members..!";
  }
  else{
    this.crewservice.createcrew(this.newCrewForm.value).subscribe((res:any)=>{
      if(res['msg']==-1){
      this.message="Choose a different crew name...!"
    }
    else if(res['msg']==-2){
 
      this.message="members does not have an account...!"
    }
    else{
      this.crewservice.setrecentcrew(res);
      this.route.navigateByUrl("/");//routing to home page
    }
  });
  }
  
}



}
