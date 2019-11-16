import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { AmpersentPipe } from './pipes/ampersent.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { ClockComponent } from './components/clock/clock.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    AddProductComponent,
    ProductComponent,
    AmpersentPipe,
    FooterComponent,
    SingleProductComponent,
    DialogComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
