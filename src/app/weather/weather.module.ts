import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WeatherComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'weather', component: WeatherComponent },
    ]),
    CommonModule
  ]
})
export class WeatherModule { }
