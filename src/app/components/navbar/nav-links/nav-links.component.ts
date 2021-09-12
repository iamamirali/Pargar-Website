import { Component, OnInit } from '@angular/core';
import { ParentCategory } from 'src/app/models/home.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})

export class NavLinksComponent implements OnInit {

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
