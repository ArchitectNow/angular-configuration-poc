import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `Hello {{name}}`,
})
export class AppComponent {
  title = 'ng-config';
  name = environment.name;
}
