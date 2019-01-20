import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(
    private jarwis: JarwisService,
    private token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    return this.jarwis.signUp(this.form).subscribe(
      data => this.hundelResponse(data),
      error => this.hundelError(error)

    );
  }

  hundelError(error) {
    this.error = error.error.errors;
  }

  hundelResponse(data) {
    this.token.handel(data.access_token);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
  }

}
