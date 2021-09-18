import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopBannerComponent } from './top-banner/top-banner.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LoginBoxComponent,
    NotFoundComponent,
    TopBannerComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoginBoxComponent,
    TopBannerComponent,
    LoadingComponent
  ]
})
export class LayoutModule { }
