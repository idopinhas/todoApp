import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'products' , component: ProductsComponent },
  { path: 'addProduct' , component: AddProductComponent },
  { path: 'product/:id' , component: SingleProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
