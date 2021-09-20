import { Component, OnInit } from '@angular/core';
import { NavChildrenRootObject } from 'src/app/models/nav-children.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { TopBannerService } from 'src/app/services/top-banner.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-nav-links',
  templateUrl: './home-nav-links.component.html',
  styleUrls: ['./home-nav-links.component.scss']
})

export class HomeNavLinksComponent implements OnInit {

  navbarLinks : NavChildrenRootObject[] = []
  bannerStatus : boolean | undefined
  obs : Subscription | undefined

  constructor(private dataFetch : DataProccessService, private bannerService : TopBannerService) { }

  ngOnInit(): void {
    this.getHomeNavLinks()
    this.getBannerStatus()
  }

  getBannerStatus() {
    this.obs = this.bannerService.subjectShowBanner.subscribe((status) => {
      this.bannerStatus = status
    })
  }
  
  getHomeNavLinks() {
    this.dataFetch.getNavChildren().subscribe((data) => {
      this.navbarLinks = data
    })
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }
}
