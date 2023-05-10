import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  nextPage(){
    if(this.currUser.lessonsCompleted.length == 10 && (!this.currUser.lessonsCompleted.includes('email'))){
      this._route.navigate(['congratulations'])
      this.isloginService.nextPage('email');
    }
  }

}
