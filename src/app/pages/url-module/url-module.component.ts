import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-url-module',
  templateUrl: './url-module.component.html',
  styleUrls: ['./url-module.component.css']
})
export class UrlModuleComponent implements OnInit {

  public currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.isloginService.nextPage('url-module');
  }

}
