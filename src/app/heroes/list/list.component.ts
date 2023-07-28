import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public deletedHero: string = '';
  public arrayHeroes: string[] = [
    'Spiderman',
    'Hulk',
    'Thor',
    'Superman',
    'Mandalorian',
  ];

  constructor() {}

  ngOnInit(): void {}

  removeLastHero(): void {
    this.deletedHero = this.arrayHeroes.pop()!;
  }
}
