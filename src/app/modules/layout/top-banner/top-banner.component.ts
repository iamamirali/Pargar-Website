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
  obs : Subscription | undefined

  constructor(private auth : AuthorService, private bannerService : TopBannerService) { }

  ngOnInit(): void {
    this.getBannerStatus()
  }

  getBannerStatus() {
    this.obs = this.bannerService.subjectShowBanner.subscribe((status) => {
      this.showBanner = status
    })
  }

  onLoginClick() {
    this.auth.toggleSign(true)
  }

  onCloseBtnClick() {
    this.bannerService.subjectShowBanner.next(false)
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }

}
