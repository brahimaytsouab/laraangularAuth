import { BeforLoginService } from './Services/befor-login.service';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AfterLoginService } from './Services/after-login.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforLoginService]
  },
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [BeforLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
