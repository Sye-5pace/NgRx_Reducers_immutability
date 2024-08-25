//combining Multiple reducers: step 4
import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setInitialValue, incrementBy, undoLastAction } from './counter.actions';

export interface CounterHistoryState {
  history: number[];
}

export const initialHistoryState: CounterHistoryState = {
  history: [],
};

const _counterHistoryReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    history: [...state.history, (state.history[state.history.length - 1] || 0) + 1]
  })),
  on(decrement, (state) => ({
    ...state,
    history: [...state.history, Math.max((state.history[state.history.length - 1] || 0) - 1, 0)]
  })),
  on(reset, (state) => ({
    ...state,
    history: [...state.history, 0]
  })),
  on(setInitialValue, (state, { count }) => ({
    ...state,
    history: [...state.history, count]
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, (state.history[state.history.length - 1] || 0) + value]
  })),
  on(undoLastAction, (state) => {
    const newHistory = [...state.history];
    newHistory.pop();
    return {
      ...state,
      history: newHistory
    };
  })
);

export function counterHistoryReducer(state: CounterHistoryState | undefined, action: Action) {
  return _counterHistoryReducer(state, action);
}
