import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registerForm!:FormGroup;
  isSubmitted = false;
  invalid: boolean=false;
  message: string='';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone_number:['',[Validators.required,Validators.minLength(10)]],
      gender:['',Validators.required]
    });
  }

  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.registerForm.invalid) return;
    this.userService.register({name:this.fc['name'].value,email:this.fc['email'].value,password:this.fc['password'].value,phone_number:this.fc['phone_number'].value,gender:this.fc['gender'].value}).subscribe((res:any)=>{
      if(res['msg']==-1){
        
      this.invalid=true;
      this.message="User mail Already exists!"
    }
    else if(res['msg']==-2){
      this.invalid=true;
      this.message="Use different mobile number...!"
    }
    else{
      this.userService.setUser(res);
      this.route.navigateByUrl("/");//routing to home page
    }
  });
}



}