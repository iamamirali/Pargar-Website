import { Component, OnInit } from '@angular/core';
import { NavChildrenRootObject } from 'src/app/models/nav-children.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { AuthorService } from 'src/app/services/author.service';
import { TopBannerService } from 'src/app/services/top-banner.service';
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
  bannerStatus : boolean | undefined
  obs : Subscription[] = []

  constructor(private dataFetch : DataProccessService, private auth : AuthorService, private bannerService : TopBannerService) { }

  ngOnInit(): void {
    this.getNavChildItems()
    this.getUserLoginStatus()
    this.setUserAvatar()
    this.getBannerStatus()
  }

  getBannerStatus() {
    this.obs[0] = this.bannerService.subjectShowBanner.subscribe((status) => {
      this.bannerStatus = status
    })
  }

  getNavChildItems() {
    this.dataFetch.getNavChildren().subscribe((data) => {
      this.categories = data
    })
  }

  getUserLoginStatus() {
    this.obs[1] = this.auth.subjectLoginStatus.subscribe((status) =>{
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
    this.obs.forEach((item) => {
      item.unsubscribe()
    })
  }
}