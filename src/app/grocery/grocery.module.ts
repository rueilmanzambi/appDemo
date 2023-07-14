import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GroceryComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'grocery', component: GroceryComponent },
    ]),
    CommonModule
  ]
})
export class GroceryModule { }
