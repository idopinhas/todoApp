import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() removeProductFromParent: EventEmitter<any> = new EventEmitter();
  constructor( public dialog: MatDialog, private productsService: ProductsService ) { }

  ngOnInit() {
  }

  removeProduct(id: number): void {
    this.removeProductFromParent.emit(id);
  }

  editTodo(product: Product) {
    const dialogRef = this.dialog.open(DialogComponent,{
      width: '450px',
      data: product
    });
    dialogRef.afterClosed().subscribe((newData: Product) => {
      newData.id = product.id;
      this.productsService.updateProduct(newData);
    })
  }

}

    // Create component dialog - done
    // open dialog with product data
    // Display data in dialog component
    // on close send input values 
    // catch pararments in this file and edit in products.service
