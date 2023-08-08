import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  get characters() {
    return [...this.dbzService.characters];
  }

  emitDeletedChar(id: string): void {
    this.dbzService.deleteCharacterByID(id);
  }

  onNewCharacter(char: Character): void {
    this.dbzService.onNewCharacter(char);
  }

  ngOnInit(): void {}
}
