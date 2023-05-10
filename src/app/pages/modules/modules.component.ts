import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/other/islogin.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  public currUser = JSON.parse(localStorage.getItem('currUser') as string);
  constructor(
    private isloginService: IsloginService
  ) { }

  ngOnInit(): void {
  }

  nextPage(){
    this.isloginService.nextPage('modules');
  }

}
