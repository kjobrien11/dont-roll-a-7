import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  dontRoll: number = 7;
  private currentScoreSubject = new BehaviorSubject<number>(0);
  private highScoreSubject = new BehaviorSubject<number>(0);

  currentScore$ = this.currentScoreSubject.asObservable();
  highScore$ = this.highScoreSubject.asObservable();

  constructor() { }

  roll(): number {
    const roll = Math.floor(Math.random() * 180) + 1;

    if (roll === this.dontRoll) {
      const high = Math.max(this.highScoreSubject.value, this.currentScoreSubject.value);
      this.highScoreSubject.next(high);
      this.currentScoreSubject.next(0);
    } else {
      this.currentScoreSubject.next(this.currentScoreSubject.value + 1);
    }

    return roll;
  }

}
