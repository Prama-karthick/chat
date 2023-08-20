import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewcrewComponent } from './components/newcrew/newcrew.component';
import { CrewpageComponent } from './components/crewpage/crewpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProfileComponent,
    NewcrewComponent,
    CrewpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top',
      newestOnTop:false
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
// {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true}
