import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IsloginService } from '../islogin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login!: FormGroup;
  public currUser!: Object

  constructor(
    
    private _route: Router,
    private _http: HttpClient,
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
    
    this.isloginService.isUserLogin$.next(true);
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
    })
  }


  loginData(login:FormGroup){
    this._http.get<any>('http://localhost:3000/signup')
      .subscribe(res=>{
        const user = res.find((a:any)=>{
          this.currUser = a;
          return a.email === this.login.value.email && a.password === this.login.value.password
        });

        if(user){
          this.login.reset();
          localStorage.setItem('currUser', JSON.stringify(this.currUser));
          this.isloginService.isUserLogin$.next(true);
          this.isloginService.currentPercent$.next(true)
          this._route.navigate(['home']);
        }else{
          alert('User not found');
          this._route.navigate(['login'])

        }
      }, e=>{
        alert('wrong')
      })
      
  }

}
