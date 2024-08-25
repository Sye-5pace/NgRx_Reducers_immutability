import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import anime from 'animejs/lib/anime.es.js';
import { ICounterState } from '../../store/counter.model';
import { ButtonComponent } from '../../components/reusable/button/button.component';
import { increment, decrement, reset, setInitialValue, undoLastAction } from '../../store/counter.actions';
import { selectCount } from '../../store/counter.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  count!: number;
  initialValue: number = 0;

  constructor(private store: Store<{ count: ICounterState }>) {}

  ngOnInit() {
    this.store.pipe(select(selectCount)).subscribe(
      (count) => this.count = count
    );
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  setInitialValue(): void {
    if (!isNaN(this.initialValue)) {
      this.store.dispatch(setInitialValue({ count: this.initialValue }));
    }
  }

  // New Undo method
  undo(): void {
    this.store.dispatch(undoLastAction());
  }

  ngAfterViewInit(): void {
    anime({
      targets: 'main',
      translateY: [300, 0],
      easing: 'easeInOutQuad',
      borderRadius: ['50%', '.625rem'],
      height: ['0px', '15rem'],
      opacity: [0, 1],
      delay: 300,
      scale: [0.8, 1]
    });
    anime({
      targets:'h2,#counter-head',
      translateY: [-300, 0],
      easing: 'easeInOutQuad',
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: 150
    })
    anime({
      targets:'#dots div',
      translateY: [-200, 0],
      opacity: [0, 1],
      easing: 'easeOutBounce',
      delay: anime.stagger(700),
      duration: 1700,
    })
  }
}
