// implement meta-reducers for logging 
import { Action, MetaReducer } from '@ngrx/store';
import { AppState } from './index';

// Logger meta-reducer for debugging state and actions
export function logger(reducer: (state: AppState | undefined, action: Action) => AppState):
 (state: AppState | undefined, action: Action) => AppState {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);
    const nextState = reducer(state, action);
    console.log('state after: ', nextState);
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
