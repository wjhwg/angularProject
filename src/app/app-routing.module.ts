import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { FooterComponent } from './footer/footer.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'product/:name', component: ProductComponent
  },

  {
    path: 'footer', component: FooterComponent
  },
  {
    path: 'seller', component: SellerInfoComponent, outlet: 'outx'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
