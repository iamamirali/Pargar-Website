import { Component, OnInit } from '@angular/core';
import { NavChildrenRootObject } from 'src/app/models/nav-children.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';
@Component({
  selector: 'app-home-nav-links',
  templateUrl: './home-nav-links.component.html',
  styleUrls: ['./home-nav-links.component.scss']
})

export class HomeNavLinksComponent implements OnInit {

  navbarLinks : NavChildrenRootObject[] = []

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
    this.getHomeNavLinks()
  }
  
  getHomeNavLinks() {
    this.dataFetch.getNavChildren().subscribe((data) => {
      this.navbarLinks = data
    })
  }
}
