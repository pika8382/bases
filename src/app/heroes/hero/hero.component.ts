import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public name: string = 'ironMan';
  public edad: number = 45;
  public metodo: string = 'matar';

  constructor() {}

  ngOnInit(): void {}

  get nombreCapitalizado(): string {
    return this.name.toLocaleUpperCase();
  }

  getDescrip(): string {
    return this.name + ' - ' + this.edad;
  }

  changeName(): void {
    this.name = 'spiderman';
  }
  changeAge(): void {
    this.edad = 25;
  }

  reset(): void {
    this.name = 'ironman';
    this.edad = 45;
  }
}
