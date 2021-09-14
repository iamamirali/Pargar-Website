import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';

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

  constructor(private auth : AuthorService, private router : Router) { }

  ngOnInit(): void {
    // shows login box if the user clicks login btn
    this.auth.subjectSignClick.subscribe((status) => {
      this.isClicked = status
    })
  }

  // hides login box by clicking close btn
  onCloseBtnClick() {
    this.isClicked = false
  }


  // sets post number request, after clicking btn
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

  // sets authentication code to request, after clicking btn
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
