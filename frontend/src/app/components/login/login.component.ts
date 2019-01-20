import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;



  constructor(
    private jarwis: JarwisService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
  ) { }

  onSubmit() {
    return this.jarwis.login(this.form).subscribe(
      data => this.handelResponse(data),
      error => this.hundelError(error)

    );
  }

  hundelError(error) {
    this.error = error.error.error;
  }

  handelResponse(data) {
    this.token.handel(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
  }

}
