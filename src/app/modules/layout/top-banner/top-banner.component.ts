import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorService } from 'src/app/services/author.service';
import { TopBannerService } from 'src/app/services/top-banner.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  showBanner : boolean | undefined
  isLoggedIn : boolean | undefined
  obs : Subscription[] = []

  constructor(private auth : AuthorService, private bannerService : TopBannerService) { }

  ngOnInit(): void {
    this.getBannerStatus()
    this.getLoginStatus()
  }

  getBannerStatus() {
    this.obs[0] = this.bannerService.subjectShowBanner.subscribe((status) => {
      this.showBanner = status
    })
  }

  getLoginStatus() {
    this.obs[1] = this.auth.subjectLoginStatus.subscribe((status) => {
      this.isLoggedIn = status
      if(status) {
        this.bannerService.subjectShowBanner.next(false)
      }
    })
  }

  onLoginClick() {
    this.auth.toggleSign(true)
  }

  onCloseBtnClick() {
    this.bannerService.subjectShowBanner.next(false)
  }

  ngOnDestroy() {
    this.obs.forEach((item) => {
      item.unsubscribe()
    })
  }

}
