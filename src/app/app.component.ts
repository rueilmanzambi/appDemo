import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'appDemo';
}
