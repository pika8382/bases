import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'gokuu', power: 5000 },
    { id: uuid(), name: 'kriliin', power: 50 },
    { id: uuid(), name: 'vegue', power: 5001 },
  ];

  onNewCharacter(char: Character): void {
    const newChar: Character = { ...char, id: uuid() };
    this.characters.push(newChar);
  }

  onDeletedCharacter(index: number): void {
    this.characters.splice(index, 1);
    console.log(this.characters);
  }

  deleteCharacterByID(id: string) {
    console.log('id : ' + id);
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
