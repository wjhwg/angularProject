import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { StarComponent } from './star/star.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './home/home.component';
import { Code404Component } from './code404/code404.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    StarComponent,
    ProductComponent,
    CarouselComponent,
    HomeComponent,
    Code404Component,
    SellerInfoComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
