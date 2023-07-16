import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryComponent } from './grocery.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroceryComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'grocery', component: GroceryComponent },
    ]),
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class GroceryModule { }
