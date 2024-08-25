import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { storeReducer } from './store/counter.reducer'
import { CounterEffects } from './store/counter.effects';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ count: storeReducer}),
    provideEffects([CounterEffects]),
    provideStoreDevtools()
  ]
};
