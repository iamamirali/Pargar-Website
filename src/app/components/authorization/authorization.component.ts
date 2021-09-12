import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  isClicked : boolean = false

  hasError : boolean = false

  userNickname : string = ''

  mobileNumber: number | undefined

  mobileNumError : string = ''

  isCodeSent: boolean = false

  authCode: number | undefined

  authCodeError: string = ''

  constructor(private auth : AuthorService, private router : Router) { }

  ngOnInit(): void {
    this.auth.subjectSignClick.subscribe((status) => {
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

}
