import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopBannerComponent } from './top-banner/top-banner.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LoginBoxComponent,
    NotFoundComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoginBoxComponent,
    TopBannerComponent
  ]
})
export class LayoutModule { }
