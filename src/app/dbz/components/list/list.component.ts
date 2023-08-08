import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input()
  public characterAray: Character[] = [];
  public deletedChar: Character = {
    name: '',
    power: 0,
  };

  @Output()
  public emitDeletedChar: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeletedCharacter(id?: string): void {
    if (!id) return;
    this.emitDeletedChar.emit(id);
  }
}
