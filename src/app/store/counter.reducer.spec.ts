import { increment } from './counter.actions';
import {  initialState, storeReducer } from './counter.reducer';

describe('Counter Reducer', () => {
  describe('an unknown action', () => {
    
    it('should increment count when increment action is dispatched', () => {
      const initialState = { count: 0 };
      const action = increment();
      const newState = storeReducer(initialState, action);
      expect(newState.count).toEqual(1);
    });
  });
});
function reducer(initialState: { count: number; }, action: any) {
  throw new Error('Function not implemented.');
}

