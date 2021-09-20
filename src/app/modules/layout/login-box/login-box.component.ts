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
    const dataToPost = {
      "mobile": `${this.mobileNumber}`,
      "device_os":"angularJS",
      "device_id":"Desktop",
      "device_model":"browser"
  }
    
    this.auth.sendMobileNum(dataToPost).subscribe((data)=> {
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
    const dataToPost = {
      "mobile": `${this.mobileNumber}`,
      "device_id":"Desktop",
      "verification_code":`${this.authCode}`,
      "nickname": `${this.userNickname}`
    }
    
    this.auth.sendAuthCode(dataToPost).subscribe((data) => {
      this.auth.setToken(data.token)
      this.onCloseBtnClick()
      this.router.navigate(['/profile'])
      this.auth.getNickname(this.userNickname)
    }, (error) => {
      if(error) {
        this.hasError = true
        this.authCodeError = error
      }
    })
  }

  onSendAgainClick() {
    this.isCodeSent = false
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }

}
