import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const decrement = createAction('[Counter] Decrement');

export const setCount = createAction(
  '[Counter] Set Count',
  props<{ count: number }>()
);
