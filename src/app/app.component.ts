import { Component } from '@angular/core';
import { CounterComponent } from './view/counter/counter.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(private store: Store) {}
  
  ngOnInit() {
    this.store.dispatch({ type: '[App] Initialize' });
  }
}
