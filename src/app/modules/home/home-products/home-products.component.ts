import { Component, OnInit } from '@angular/core';
import { Homeitem } from 'src/app/models/home.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})

export class HomeProductsComponent implements OnInit {

  sectionList : Homeitem[] = []

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
    this.dataFetch.getHomeData().subscribe((data)=> {
      this.sectionList = data.homeitem
    })
  }

}
