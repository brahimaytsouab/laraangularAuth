import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { JarwisService } from './Services/jarwis.service';
import { TokenService } from './Services/token.service';
import { AuthService } from './Services/auth.service';
import { AfterLoginService } from './Services/after-login.service';
import { BeforLoginService } from './Services/befor-login.service';
// Import your library
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [
    JarwisService
    , TokenService
    , AuthService
    , AfterLoginService
    , BeforLoginService
    , { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
