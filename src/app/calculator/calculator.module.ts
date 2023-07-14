import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'calculator', component: CalculatorComponent },
    ]),
    CommonModule,
  ]
})
export class CalculatorModule { }
