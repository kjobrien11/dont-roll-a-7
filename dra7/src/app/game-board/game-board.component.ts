import { Component } from '@angular/core';
import { GameBoardSqaureComponent } from '../game-board-sqaure/game-board-sqaure.component';
import { NgFor } from '@angular/common';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-board',
  imports: [GameBoardSqaureComponent, NgFor, CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {
  rollNumber$!: Observable<number | null>;


  squares = Array.from({ length: 180 });
  constructor(public gameService: GameService) {
    this.rollNumber$ = this.gameService.rollNumber$;
  }

  roll(){
    this.gameService.roll();
  }
  

}
