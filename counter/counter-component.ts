import {Component, Inject} from 'angular2/angular2';
import {CounterActions} from './counter-actions';

@Component({
    selector: 'counter',
    template: `
  <p>
    Clicked: {{ counter }} times
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="incrementIfOdd()">Increment if odd</button>
    <button (click)="incrementAsync()">Increment async</button>
  </p>
  `
})
export class Counter {
    private actions:CounterActions;

    constructor(@Inject(CounterActions) counterActions:CounterActions) {
        this.actions = counterActions;
    }

    increment() {
        this.actions.increment();
    }

    decrement() {
        this.actions.decrement();
    }

    incrementIfOdd() {
        this.actions.incrementIfOdd();
    }

    incrementAsync() {
        this.actions.incrementAsync(1000);
    }
}
