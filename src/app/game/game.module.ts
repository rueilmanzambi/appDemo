import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GameComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'game', component: GameComponent },
    ]),
    CommonModule,
  ]
})
export class GameModule { }
