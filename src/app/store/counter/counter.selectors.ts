import { AppState } from '@/store/app.state';
import { createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const selectCounter = (state: AppState) => state.counter;

export const selectCount = createSelector(
  selectCounter,
  (state: CounterState) => state.count
);
