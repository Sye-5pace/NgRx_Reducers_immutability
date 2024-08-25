import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CounterEffects } from './counter.effects';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { decrement, increment } from './counter.actions';

describe('CounterEffects', () => {
  let effects: CounterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterEffects,
        provideMockStore({}),
        { provide: Actions, useValue: of() },
      ],
    });

    effects = TestBed.inject(CounterEffects);
  });

  beforeEach(() => {
    spyOn(localStorage, 'setItem'); // Mock localStorage.setItem
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should save counter value to localStorage on increment action', () => {
    const actions$ = of(increment());
    const store = TestBed.inject(MockStore);
    spyOn(store, 'select').and.returnValue(of(5));

    effects.saveToLocalStorage$.subscribe();

    expect(localStorage.setItem).toHaveBeenCalledWith('counter', '5');
  });

  it('should save counter value to localStorage on decrement action', () => {
    const actions$ = of(decrement());
    const store = TestBed.inject(MockStore);
    spyOn(store, 'select').and.returnValue(of(5));

    effects.saveToLocalStorage$.subscribe();

    expect(localStorage.setItem).toHaveBeenCalledWith('counter', '5');
  });
});
