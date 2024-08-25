//Basic Reducer implementation: Step 1, counter.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setInitialValue, undoLastAction } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};


//using createReducer and on Functions : Step 3
const _counterReducer = createReducer(
  initialState,

  //Basic Reducer implementation: Step 1
  on(increment,
    (state) => (
      // ensure immutability: Step 2
      { ...state, count: state.count + 1 }
    )
  ),
  on(decrement,
    (state) => (
      state.count > 0 ?
      //ensure immutability: Step 2
      { ...state, count: state.count - 1 } :
      state
    )
  ),
  on(reset,
    (state) => (
      // ensure immutability: Step 2
      { ...state, count: 0 }
    )
  ),


  on(setInitialValue, (state, { count }) => ({ ...state, count })),
  on(undoLastAction,
    // complex state updates: step 5
    (state) => {
    return { ...state, count: state.count - 1 };
  })
);

export function storeReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
