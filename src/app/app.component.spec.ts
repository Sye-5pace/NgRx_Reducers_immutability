import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ngOnInit', () => {
  let component: AppComponent;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        provideMockStore()
      ]
    });

    component = TestBed.inject(AppComponent);
    store = TestBed.inject(Store);
    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch the "[App] Initialize" action when ngOnInit is called', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith({ type: '[App] Initialize' });
  });
});
