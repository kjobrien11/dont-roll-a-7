import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  dontRoll: number = 7;
  highScore: number = 0;
  currentScore: number = 0;

  constructor() { }

  roll(): number {
    const roll = Math.floor(Math.random() * 180) + 1;

    if (roll === this.dontRoll) {
      this.highScore = Math.max(this.highScore, this.currentScore);
      this.currentScore = 0;
    } else {
      this.currentScore += 1;
    }

    return roll;
  }

  getHighScore(){
    return this.highScore;
  }

  getScore(){
    return this.currentScore;
  }

}
