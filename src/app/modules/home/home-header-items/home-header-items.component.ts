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

  ngOnInit(): void {
    this.dataFetch.getHomeData().subscribe((data) => {
        this.headerList = data.headeritem
        
        this.headerList.forEach((item) => {
          this.headerAvatars.push(item.feature_avatar.hdpi)
      })
    })
  }
}
