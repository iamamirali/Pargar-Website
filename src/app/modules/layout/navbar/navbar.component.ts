import { Component, OnInit } from '@angular/core';
import { NavChildrenRootObject } from 'src/app/models/nav-children.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { AuthorService } from 'src/app/services/author.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  categories : NavChildrenRootObject[] = []
  isLoggedIn : boolean | undefined;
  userAvatar : string = ''
  isCategoryClicked : boolean = false
  isChildLinkClicked : boolean = false
  obs : Subscription | undefined

  constructor(private dataFetch : DataProccessService, private auth : AuthorService) { }

  ngOnInit(): void {
    this.getNavChildItems()
    this.getUserLoginStatus()
    this.setUserAvatar()
  }

  getNavChildItems() {
    this.dataFetch.getNavChildren().subscribe((data) => {
      this.categories = data
    })
  }

  getUserLoginStatus() {
    this.obs = this.auth.subjectLoginStatus.subscribe((status) =>{
      this.isLoggedIn = status
    })
  }

  setUserAvatar() {
    if(this.auth.isLoggedIn) {
      this.dataFetch.getUserInfo().subscribe((data) => {
        this.userAvatar = data.avatar
      })
    }
  }

  onSignClick() {
    this.auth.toggleSign(true)
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }
}