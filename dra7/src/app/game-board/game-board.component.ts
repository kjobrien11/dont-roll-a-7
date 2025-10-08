import { Component, OnInit } from '@angular/core';
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
export class GameBoardComponent implements OnInit {

  private readonly TOTAL_SQUARES: number = 105;
  rollNumber$!: Observable<number | null>;
  values: (number | null)[] = Array(this.TOTAL_SQUARES).fill(null);
  currentRole: number = 0;


  squares = Array.from({ length: this.TOTAL_SQUARES });
  constructor(public gameService: GameService) {
    this.rollNumber$ = this.gameService.rollNumber$;
  }

ngOnInit(): void {
  const startRolling = () => {
    let count = 0;

    const rollOnce = () => {
      if (count >= 180) return;
      const result = this.roll();
      if (result === 7) {
        setTimeout(() => {
          this.resetBoard();
          startRolling();
        }, 3000);

        return;
      }
      count++;
      setTimeout(rollOnce, 1000);
    };
    rollOnce();
  };

  startRolling();
}

  roll() {
    const roll = this.gameService.roll();
    const nextIndex = this.values.findIndex(v => v === null);
    console.log(nextIndex);
    if (nextIndex !== -1) {
      this.values[nextIndex] = roll;
    }
    return roll;
  }

  resetBoard() {
    this.values = Array(180).fill(null);
  }


}
