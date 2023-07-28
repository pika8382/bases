import { Component } from '@angular/core';

@Component({
  template: `
    <h3>Counter : {{ count }}</h3>
    <button (click)="operar(1)">+1</button>
    <button (click)="reset()">RESET</button>
    <button (click)="operar(-1)">-1</button>
  `,
  selector: '<app-counter>',
})
export class CounterComponent {
  public count: number = 10;

  public operar(value: number): void {
    this.count += value;
  }

  reset(): void {
    this.count = 10;
  }
}
