import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userAvatar : string = ''

  userNickname : string = ''

  constructor(private dataFetch : DataProccessService, private auth : AuthorService) { }

  ngOnInit(): void {
    this.dataFetch.getUserInfo().subscribe((data) => {
      this.userAvatar = data.avatar
    })

    this.auth.subjectNickname.subscribe((nickname) => {
      this.userNickname = nickname
    })
  }

  onLogoutClick() {
    this.auth.subjectLoginStatus.next(false)
    this.auth.setToken('')
  }
}
