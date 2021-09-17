import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  showBanner : boolean = true

  constructor(private auth : AuthorService) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.auth.toggleSign(true)
  }

  onCloseBtnClick() {
    this.showBanner = false
  }

}
