import { Component } from '@angular/core';
import { GameHeaderComponent } from '../game-header/game-header.component';
import { GameBoardComponent } from '../game-board/game-board.component';

@Component({
  selector: 'app-dra7-container',
  imports: [GameHeaderComponent, GameBoardComponent],
  templateUrl: './dra7-container.component.html',
  styleUrl: './dra7-container.component.css'
})
export class Dra7ContainerComponent {

}
