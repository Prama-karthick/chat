import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewcrewComponent } from './components/newcrew/newcrew.component';
import { CrewpageComponent } from './components/crewpage/crewpage.component';
import { AuthGuard } from './auth/authguard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'profile',component:ProfileComponent},
  {path:'newcrew',component:NewcrewComponent},
  {path:'crewPage',component:CrewpageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
