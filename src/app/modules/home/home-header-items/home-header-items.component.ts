import { Component, OnInit } from '@angular/core';
import { Avatar, Headeritem } from 'src/app/models/home.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-home-header-items',
  templateUrl: './home-header-items.component.html',
  styleUrls: ['./home-header-items.component.scss']
})

export class HomeHeaderItemsComponent implements OnInit {

  headerList : Headeritem[] = []

  headerAvatars : string[] = []

  constructor(private dataFetch : DataProccessService) {
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
    this.dataFetch.getHomeData().subscribe((data) => {
        this.headerList = data.headeritem
    })
  }
}
