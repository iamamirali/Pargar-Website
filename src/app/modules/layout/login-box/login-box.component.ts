import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  isClicked : boolean = false
  hasError : boolean = false
  userNickname : string = ''
  mobileNumber: number | undefined
  mobileNumError : string = ''
  isCodeSent: boolean = false
  authCode: number | undefined
  authCodeError: string = ''
  obs : Subscription | undefined

  constructor(private auth : AuthorService, private router : Router) { }

  ngOnInit(): void {
    this.getSignUpBtnClickStatus()
  }

  getSignUpBtnClickStatus() {
    this.obs = this.auth.subjectSignClick.subscribe((status) => {
      this.isClicked = status
    })
  }

  onCloseBtnClick() {
    this.isClicked = false
  }


  onReceiveCodeClick() {
    this.auth.sendMobileNum(this.mobileNumber).subscribe((data)=> {
      if(data.message) {
        this.isCodeSent = true
      }
    }, (error) => {
      if(error) {
        this.hasError = true
      }
      this.mobileNumError = error
      }
    )
  }

  onSendCodeClick() {
    this.auth.sendAuthCode(this.mobileNumber, this.authCode).subscribe((data) => {
      this.auth.setToken(data.token)
      this.router.navigate(['/profile'])
    }, (error) => {
      if(error) {
        this.hasError = true
        this.authCodeError = error
      }
    })
    this.auth.getNickname(this.userNickname)
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }

}
