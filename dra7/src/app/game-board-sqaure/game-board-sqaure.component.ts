import { Component, Input } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-game-board-sqaure',
  imports: [],
  templateUrl: './game-board-sqaure.component.html',
  styleUrl: './game-board-sqaure.component.css'
})
export class GameBoardSqaureComponent {

  @Input() index!: number;
  @Input() roll!: number | null;


}
