import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'weather', component: WeatherComponent },
    ]),
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class WeatherModule { }
