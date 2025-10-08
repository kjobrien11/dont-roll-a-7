import { Component } from '@angular/core';
import { GameService } from '../service/game.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-header',
  imports: [CommonModule],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css'
})
export class GameHeaderComponent {
  currentScore$!: Observable<number>;
  highScore$!: Observable<number>;
  previousScore$!: Observable<number>;
  previousOdds$!: Observable<number>;

  constructor(private gameService: GameService) {
    this.currentScore$ = this.gameService.currentScore$;
    this.highScore$ = this.gameService.highScore$;
    this.previousScore$ = this.gameService.previousRollNumber$
    this.previousOdds$ = this.gameService.previousRollOdds$;
  }

}
