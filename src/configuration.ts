import { InjectionToken } from '@angular/core';

export interface AppConfiguration {
  production: boolean;
  name: string;
}

export const AppConfig = new InjectionToken<AppConfiguration>('@@appConfiguration');
