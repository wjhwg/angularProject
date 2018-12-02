import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductsService } from './shared/products.service';
import { LoggerService } from './shared/logger.service';
import { AnotherProductsService } from './shared/another-products.service';
import { MysonComponent } from './myson/myson.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';


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
    MysonComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ProductsService, useFactory: (logger: LoggerService, Dev) => {
      // let logger = new LoggerService();
      let dev = Math.random() > 0.5;
      if (Dev.isDev) {
        return new ProductsService(logger);
      } else {
        return new AnotherProductsService(logger);
      }
    }, deps: [LoggerService,"IS_CONFIG"]
  }, LoggerService, {
      provide: "IS_CONFIG", useValue: {
        isDev: true
      }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
