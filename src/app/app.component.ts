import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ageFromTo = {
    from: 2,
    to: 4
  }

  ageFrom = {
    from: 2,
    to: undefined
  }

  ageTo = {
    from: undefined,
    to: 4
  }
}
