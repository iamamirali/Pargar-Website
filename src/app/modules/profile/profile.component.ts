import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isSubsClicked: boolean = false;
  isFavClicked: boolean = true;
  userAvatar : string = ''
  userNickname : string = ''
  obs : Subscription | undefined;

  constructor(private dataFetch : DataProccessService, private auth : AuthorService) { }

  ngOnInit(): void {
    this.setUserAvatar()
    this.setUserNickname()
  }

  setUserAvatar() {
    this.dataFetch.getUserInfo().subscribe((data) => {
      this.userAvatar = data.avatar
    })
  }
  
  setUserNickname () {
    this.obs = this.auth.subjectNickname.subscribe((nickname) => {
      this.userNickname = nickname
    })
  }

  onLogoutClick() {
    this.auth.subjectLoginStatus.next(false)
    this.auth.setToken('')
  }

  onFavClick() {
    this.isFavClicked = true;
    this.isSubsClicked = false
  }

  onSubsClick() {
    this.isFavClicked = false;
    this.isSubsClicked = true
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }
}
