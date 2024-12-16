import { createReducer, on } from '@ngrx/store';
import { decrement, increment, setCount } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1,
  })),
  on(setCount, (state, { count }) => ({
    ...state,
    count,
  }))
);
