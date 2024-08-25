import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CounterComponent } from './counter.component';
import { decrement, increment, reset } from '../../store/counter.actions';

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [
        provideMockStore({}),
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


  it('should initialize with default count value when component is created', () => {
    const storeMock = {
      pipe: jest.fn().mockReturnValue({
        subscribe: jest.fn().mockImplementation((callback) => callback(0))
      })
    };
    const component = new CounterComponent(storeMock as any);
    component.ngOnInit();
    expect(component.count).toBe(0);
  });

  it('should increment the count when increment action is dispatched', () => {
    const storeMock = {
      dispatch: jest.fn()
    };
    const component = new CounterComponent(storeMock as any);
    component.count = 0;
    component.increment();
    expect(storeMock.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should decrease the count when decrement action is triggered', () => {
    const storeMock = {
      dispatch: jest.fn()
    };
    const component = new CounterComponent(storeMock as any);
    component.count = 5;
    component.decrement();
    expect(storeMock.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should set initial value correctly when valid', () => {
    const storeMock = {
      dispatch: jest.fn(),
    };
    const component = new CounterComponent(storeMock as any);
    component.initialValue = 5;
    component.setInitialValue();
    expect(storeMock.dispatch).toHaveBeenCalledWith({ type: '[Counter] Set Initial Value', count: 5 });
  });
});
