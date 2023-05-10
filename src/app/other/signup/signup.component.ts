import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup:FormGroup|any;

  constructor(
    private _route: Router,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
    })
  }
  signupData(signup:FormGroup){
    let newUser = {
      'fname': this.signup.value.fname,
      'lname': this.signup.value.lname,
      'email': this.signup.value.email,
      'password': this.signup.value.password,
      'lessonsCompleted': []
    };

    this._http.post<any>('http://localhost:3000/signup', newUser)
      .subscribe(res=>{
        this.signup.reset();
        this._route.navigate(['login'])
      }, e=>{
        alert('wrong')
      })
  }

}
