import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DialogComponent> ) { }

  ngOnInit() {
  }

  onSubmit(newTitle,newPrice): void {
    console.log(newTitle,newPrice);
    const data = {
      title: newTitle,
      price: newPrice
    };
    this.dialogRef.close(data);
  }

}
