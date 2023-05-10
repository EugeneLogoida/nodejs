import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsloginService } from '../islogin.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  currUser = JSON.parse(localStorage.getItem('currUser') as string);
  userAdded = false;

  // percent=Math.round(this.currUser.lessonsCompleted.length / 11 * 100 as number);
  percent = 0;
  title = ''
  // title = this.percent +'%'

  constructor(
    private _route: Router,
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
    this.checkUser();
    this.checkPercent();
    this.checkUpdatesUser();
    this.checkUpdatesPercent()
    console.log(this.userAdded);
    
  }
  logout(){
    
    localStorage.removeItem('currUser');
    this._route.navigate(['login']);
    this.isloginService.isUserLogin$.next(true);
  }
  checkUser(){
    this.currUser = JSON.parse(localStorage.getItem('currUser') as string);
    if(this.currUser) this.userAdded = true
    else this.userAdded = false
  }
  checkPercent(){
    this.currUser = JSON.parse(localStorage.getItem('currUser') as string);
    if(this.currUser){
      this.percent=Math.round(this.currUser.lessonsCompleted.length / 11 * 100 as number);
      this.title = this.percent +'%'

    } else{
      this.percent=0;
      this.title = this.percent +'%'
    }
  }

  checkUpdatesUser():void{
    this.isloginService.isUserLogin$.subscribe(()=>{
      this.checkUser()
    })
  }
  checkUpdatesPercent(){
    this.isloginService.currentPercent$.subscribe(()=>{
      this.checkPercent()
    })
  }


}
