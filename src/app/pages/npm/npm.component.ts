import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.css']
})
export class NpmComponent implements OnInit {

  public currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.isloginService.nextPage('npm');
  }


}
