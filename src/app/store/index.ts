import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CounterState, storeReducer } from './counter.reducer';
import { CounterHistoryState, counterHistoryReducer } from './counter-history.reducer';
import { environment } from '../../environments/environment';
import { logger } from './meta-reducers';

// Define the application state interface
export interface AppState {
  counter: CounterState;
  counterHistory: CounterHistoryState;
}

// Map the reducers to the state
export const reducers: ActionReducerMap<AppState> = {
  counter: storeReducer,
  counterHistory: counterHistoryReducer
};

// Apply meta-reducers based on the environment
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
