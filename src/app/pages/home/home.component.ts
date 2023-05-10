import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.isloginService.nextPage('home');
  }


}
