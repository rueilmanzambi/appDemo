import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { WeatherComponent } from '../weather/weather.component';
import { CalculatorComponent } from '../calculator/calculator.component';
import { GroceryComponent } from '../grocery/grocery.component';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'game', component: GameComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'grocery', component: GroceryComponent },
    ]),
    CommonModule
  ],
  exports: [
    CommonModule,
    ToolbarComponent
  ]
})
export class SharedModule { }
