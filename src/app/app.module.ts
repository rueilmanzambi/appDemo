import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
//import { CalculatorComponent } from './calculator/calculator.component';
//import { GroceryComponent } from './grocery/grocery.component';
//import { WeatherComponent } from './weather/weather.component';
//import { GameComponent } from './game/game.component';
import { GameModule } from './game/game.module';
import { WeatherModule } from './weather/weather.module';
import { GroceryModule } from './grocery/grocery.module';
import { CalculatorModule } from './calculator/calculator.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    //CalculatorComponent,
    //GroceryComponent,
    //WeatherComponent,
    //GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    GameModule,
    WeatherModule,
    GroceryModule,
    CalculatorModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
