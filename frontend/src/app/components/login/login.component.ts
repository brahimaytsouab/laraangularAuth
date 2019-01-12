import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    //'Authorization': 'my-auth-token'
  })
};

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



  constructor(private http:HttpClient) { }

  onSubmit() {
    console.log(httpOptions);
    return this.http.post('http://localhost:8000/api/login', this.form, httpOptions).subscribe(
      data => console.log(data),
      error => this.hundelError(error)

    );
  }

  hundelError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
