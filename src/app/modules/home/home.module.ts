import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeComponent } from './home component/home.component';
import { HomeHeaderItemsComponent } from './components/home-header-items/home-header-items.component';
import { HomeNavLinksComponent } from './components/home-nav-links/home-nav-links.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderItemsComponent,
    HomeNavLinksComponent,
    HomeProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
