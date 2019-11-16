import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
