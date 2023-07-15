import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CalculatorComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'calculator', component: CalculatorComponent },
    ]),
    CommonModule,
    SharedModule
  ]
})
export class CalculatorModule { }
