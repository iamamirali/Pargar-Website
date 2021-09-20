import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Headeritem } from 'src/app/models/home.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { TopBannerService } from 'src/app/services/top-banner.service';

@Component({
  selector: 'app-home-header-items',
  templateUrl: './home-header-items.component.html',
  styleUrls: ['./home-header-items.component.scss']
})

export class HomeHeaderItemsComponent implements OnInit {

  headerList : Headeritem[] = []
  headerAvatars : string[] = []
  bannerStatus : boolean | undefined
  obs : Subscription | undefined

  constructor(private dataFetch : DataProccessService, private bannerService : TopBannerService) {
  }

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 7000,
    "infinite": true,
    "centerMode": true,
    "rtl": true,
  };

  ngOnInit(): void {
    this.getHeaderItems()
    this.getBannerStatus()
  }

  getBannerStatus() {
    this.obs = this.bannerService.subjectShowBanner.subscribe((status) => {
      this.bannerStatus = status
    })
  }
  
  getHeaderItems() {
    this.dataFetch.getHomeData().subscribe((data) => {
        this.headerList = data.headeritem
    })
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }
}
