import { counterReducer } from './counter.reducer';
import { increment, decrement, setCount } from './counter.actions';
import { initialState } from './counter.state';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    const result = counterReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });

  it('should increment the count', () => {
    const action = increment();
    const state = { count: 5 };
    const result = counterReducer(state, action);
    expect(result.count).toBe(6);
  });

  it('should decrement the count', () => {
    const action = decrement();
    const state = { count: 5 };
    const result = counterReducer(state, action);
    expect(result.count).toBe(4);
  });

  it('should set count to the specified value', () => {
    const action = setCount({ count: 10 });
    const state = { count: 5 };
    const result = counterReducer(state, action);
    expect(result.count).toBe(10);
  });
});
