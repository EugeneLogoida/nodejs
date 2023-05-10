import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  public currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
    
  }

  nextPage(){
    this.isloginService.nextPage('intro');
  }

}
