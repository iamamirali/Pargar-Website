import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  isSignClicked : boolean = false
  isLoggedIn : boolean = false
  userNickname : string = ''
  subjectLoginStatus : Subject<boolean> = new Subject();
  subjectSignClick : Subject<boolean> = new Subject();
  subjectNickname : Subject<string> = new Subject();
  
  constructor(private http : HttpClient) {
    this.subjectLoginStatus.next(this.isLoggedIn)
   }


  toggleSign(status : boolean) {
    this.isSignClicked = status
    this.subjectSignClick.next(this.isSignClicked)
  }

  getNickname(name : string) {
    this.userNickname = name
    this.subjectNickname.next(this.userNickname)
  }

  sendMobileNum(data : object) {
    return this.http.post<any>('https://api.vasapi.click/mobile_login_step1/7', data)  
      .pipe(
        catchError( error => {
          let errorMsg = '!خطا در  دریافت اطلاعات';
          
          switch (error.error.message) {
            case 'Mobile is not valid': errorMsg = '!شماره موبایل وارد شده معبتر نیست'
            break;
            case 'incomplete parameters': errorMsg = '!شماره موبایل نمیتواند خالی باشد'
          }
          return throwError(errorMsg)
        })
      )
    }

  sendAuthCode(data : object) {
    return this.http.post<any>('https://api.vasapi.click/mobile_login_step2/7', data)
    .pipe(
      catchError(error => {
        error = '!کد نادرست است'
        return throwError(error)
      })
    )
  }

  setToken(token : string) {
    localStorage.setItem('token', token)
  }
 
  getToken(): string | null {
    return localStorage.getItem('token')
  }

}
