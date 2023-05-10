import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsloginService {


  public isUserLogin$ = new Subject<boolean>();
  public currentPercent$ = new Subject<boolean>();
  constructor(
    private _http: HttpClient
  ) {}




  update(currUser: any, id: number): Observable<any> {
    return this._http.patch<any>(`http://localhost:3000/signup/${id}`, currUser);
  }

  nextPage(lessonName:string){
    let updateUser = JSON.parse(localStorage.getItem('currUser') as string);
    if (updateUser){
      if(!updateUser.lessonsCompleted.includes(`${lessonName}`)) {
        updateUser.lessonsCompleted.push(`${lessonName}`)
        console.log(updateUser);
        
        this.update(updateUser, updateUser.id).subscribe()
        localStorage.setItem('currUser', JSON.stringify(updateUser));
        this.currentPercent$.next(true)
      }
    }
    
  }

}
