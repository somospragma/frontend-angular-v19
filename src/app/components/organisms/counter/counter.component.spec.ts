import { reducers } from '@/store/reducers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore, Store, StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import { of } from 'rxjs';
import { AppState } from '@/store/app.state';
import {
  decrement,
  increment,
  setCount,
} from '@/store/counter/counter.actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent, StoreModule.forRoot({})],
      providers: [provideStore(reducers)],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store.dispatch when increment is called', () => {
    spyOn(store, 'dispatch');

    component.increment();

    expect(store.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should call store.dispatch when decrement is called', () => {
    spyOn(store, 'dispatch');

    component.decrement();

    expect(store.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should call store.dispatch when setCount is called', () => {
    spyOn(store, 'dispatch');

    const value = 5;
    component.setCount(value);

    expect(store.dispatch).toHaveBeenCalledWith(setCount({ count: value }));
  });

  it('should display the correct count from store', () => {
    const mockCount = 42;
    spyOn(store, 'select').and.returnValue(of(mockCount));

    fixture.detectChanges();

    const counterElement = fixture.nativeElement.querySelector('.counter');
    expect(counterElement.textContent).toContain(mockCount.toString());
  });
});
