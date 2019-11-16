import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products$: Product[];
  public productsSub: Subscription;
  constructor(private productsService: ProductsService) {
    this.productsSub = this.productsService.getProducts().subscribe((products) => {
      this.products$ = products;
    })
   }

  ngOnInit() {
  }

  removeProduct(id: number) {
    this.productsService.removeProduct(id);
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }

}
