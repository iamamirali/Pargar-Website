import { NgIterable } from '@angular/core';
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

  normalSlider = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": true,
    "nextArrow": '<div style=\'position: absolute; top: 35%; right: -28px; cursor: pointer; font-size: 3.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 35%; left: -28px; z-index: 1; cursor: pointer; font-size: 3.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "infinite": true,
    "rtl": true,
  };
  
  multiFeatureSlider = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "arrows": true,
    "nextArrow": '<div style=\'position: absolute; top: 35%; right: -28px; cursor: pointer; font-size: 3.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 35%; left: -28px; z-index: 1; cursor: pointer; font-size: 3.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "infinite": false,
    "rtl": true,
  };

  ngOnInit(): void {
    this.getHomeProducts()
  }

  getHomeProducts() {
    this.dataFetch.getHomeData().subscribe((data)=> {
      this.sectionList = data.homeitem
      console.log(data.homeitem);
    })
  }

  getProductRank(product : any) : NgIterable<any> | null | undefined {
    const rankCounter : number[] = []
        for(let i = 0; i < Math.ceil(product.rank); i++) {
          rankCounter.push(i)
        }
        
        return rankCounter
  }

}
