import { Component, OnInit } from '@angular/core';
import { ParentCategory } from 'src/app/models/home.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-home-nav-links',
  templateUrl: './home-nav-links.component.html',
  styleUrls: ['./home-nav-links.component.scss']
})

export class HomeNavLinksComponent implements OnInit {

  navbarLinks : ParentCategory[] = []

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
    this.dataFetch.getHomeData().subscribe((data) => {
      // copy list to edit it locally
      const navListData: ParentCategory[] = data.parent_categories

      // deleting last redundant item
      navListData.pop()

      this.navbarLinks = navListData
    })
  }

}
