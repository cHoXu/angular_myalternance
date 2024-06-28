import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptorsFromDi} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {UniverseService} from "./shared/services/universe.service";
import {AuthService} from "./shared/services/auth.service";
import {provideNativeDateAdapter} from "@angular/material/core";
import {AdminRouteService} from "./admin/services/admin-route.service";

export const appConfig: ApplicationConfig = {
  providers: [
    UniverseService,
    AuthService,
    AdminRouteService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideNativeDateAdapter(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()), provideAnimationsAsync(),
  ]
};
