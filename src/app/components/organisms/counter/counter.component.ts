import { ButtonComponent } from '@/components/atoms/button/button.component';
import { TitleComponent } from '@/components/molecules/title/title.component';
import { AppState } from '@/store/app.state';
import {
  decrement,
  increment,
  setCount,
} from '@/store/counter/counter.actions';
import { selectCount } from '@/store/counter/counter.selectors';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule, TitleComponent, ButtonComponent],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  increment = () => {
    this.store.dispatch(increment());
  };

  decrement = () => {
    this.store.dispatch(decrement());
  };

  setCount = (value = 2) => {
    this.store.dispatch(setCount({ count: value }));
  };
}
