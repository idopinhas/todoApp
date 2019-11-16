import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products$: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  constructor() {
    this.products$.next([
      { id: 1, title: 'Asus zendbook 14', price: 199 },
      { id: 2, title: 'Seat ibiza 2019', price: 100000 },
      { id: 3, title: 'LG TV 60', price: 8000 }
    ]);
  }

  getProducts(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  addProduct(product: Product): void {
    const products = this.products$.getValue().concat(product);
    this.products$.next(products);
    localStorage.setItem('todos', JSON.stringify(products));
  }

  removeProduct(id: number): void {
    const tempProducts = this.products$.getValue().filter((product) => {
      return product.id !== id;
    });
    this.products$.next(tempProducts);
    localStorage.setItem('todos',JSON.stringify(tempProducts));
  }

  updateProduct(product: Product): void {
    const tempProducts = this.products$.getValue().map((currentProduct) => {
      if (currentProduct.id === product.id) {
        return product;
      } else {
        return currentProduct;
      }
    });
    this.products$.next(tempProducts);
  }

  getNewId(): number {
    return this.products$.getValue().length + 1;
  }

  getProductById(id: string): Product {
    const productsArray = this.products$.getValue().filter((product)=>{
      return product.id === parseInt(id);
    });
    return productsArray.length ? productsArray[0] : null;
  }
}
