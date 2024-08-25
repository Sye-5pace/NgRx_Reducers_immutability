import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { increment, decrement, reset } from './counter.actions';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store) {}

  saveToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement, reset),
        switchMap(() =>
          this.store.select(selectCount).pipe(
            tap((count) => {
              localStorage.setItem('counter', JSON.stringify(count));
            })
          )
        ),
        map(() => ({ type: 'NO_ACTION' })) 
      ),
    { dispatch: false }
  );

  loadFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[App] Initialize'),
        switchMap(() => {
          const savedCount = localStorage.getItem('counter');
          return from([
            savedCount
              ? { type: '[Counter] Set Count', count: JSON.parse(savedCount) }
              : { type: '[Counter] Reset' }
          ]);
        })
      )
  );
}
