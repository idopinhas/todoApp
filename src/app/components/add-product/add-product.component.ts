import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor( private productService: ProductsService , private _snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(formValues) {
    console.log(formValues);
    this.productService.addProduct(
      {id : this.productService.getNewId() , title: formValues.title, price: formValues.price}
    );
    this._snackbar.open(`Product ${formValues.title} added succefully !` , '' , {
      duration: 2000
    });
  }

}
