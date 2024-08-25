import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const setInitialValue = createAction('[Counter] Set Initial Value', props<{ count: number }>());
export const incrementBy = createAction('[Counter] Increment By', props<{ value: number }>());

// complex state updates: step 5
export const undoLastAction = createAction('[Counter] Undo Last Action');
