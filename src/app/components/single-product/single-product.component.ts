import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  id: string;
  product: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _location: Location ,private productsService: ProductsService) {

  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params)=>{
      this.id = params.get('id');
    })
    this.product = this.productsService.getProductById(this.id);
    console.log(this.product);
  }

  goBack() {
    this._location.back();
  }

}
