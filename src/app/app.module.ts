import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderItemsComponent } from './components/header-items/header-items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLinksComponent } from './components/navbar/nav-links/nav-links.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeProductsComponent } from './components/home/home-products/home-products.component';
import { LoadingModule } from './modules/shared/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderItemsComponent,
    NavbarComponent,
    NavLinksComponent,
    AuthorizationComponent,
    HomeComponent,
    ProfileComponent,
    HomeProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoadingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
