import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'product/:name', component: ProductComponent, children: [
      {
        path: '', component: ProductInfoComponent
      },
      {
        path: 'seller/:id', component: SellerInfoComponent
      }
    ]
  },
  {
    path: '**', component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
