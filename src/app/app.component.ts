import { Component, Inject } from '@angular/core';
import { AppConfig, AppConfiguration } from '../configuration';

@Component({
  selector: 'app-root',
  template: `Hello {{name}}`,
})
export class AppComponent {
  title = 'ng-config';
  name = this.appConfig.name;

  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration) {
  }
}
