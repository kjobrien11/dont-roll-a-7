import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-game-board-sqaure',
  imports: [NgClass],
  templateUrl: './game-board-sqaure.component.html',
  styleUrl: './game-board-sqaure.component.css'
})
export class GameBoardSqaureComponent {

  @Input() index!: number;
  @Input() roll!: number | null;

  getRollClass(roll: number | null) {
    if (roll === 7) { return 'red'; }
    else if (roll != null) { return 'green'; }
    else {
      return '';
    }
  }

}
