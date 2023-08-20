import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loginForm!:FormGroup;
  isSubmitted=false;
  returnUrl='';
  invalid=false;
  constructor(private formBuilder:FormBuilder,private userservice:UserService,private route:Router,private popupmsg:ToastrService){
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;
    this.userservice.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe((res:any)=>{
      if(res['msg']!=-1){
        this.userservice.setUser(res);
      this.route.navigateByUrl("/");//routing to home page
    }
    else{
      this.invalid=true;

    }
    })
  }


}
