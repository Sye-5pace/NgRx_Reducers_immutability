import { selectCounterState, selectCount } from './counter.selectors';
import { ICounterState } from './counter.model';

describe('Counter Selectors', () => {

  const initialState: ICounterState = {
    count: 10
  };

  it('should select the counter state', () => {
    const result = selectCounterState({ count: initialState });
    expect(result).toEqual(initialState);
  });

  it('should select the count', () => {
    const result = selectCount.projector(initialState);
    expect(result).toBe(10);
  });

});
