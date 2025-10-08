import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  dontRoll: number = 7;
  private currentScoreSubject = new BehaviorSubject<number>(0);
  private highScoreSubject = new BehaviorSubject<number>(0);
  private rollNumberSubject = new BehaviorSubject<number | null>(null);
  private previousRollNumberSubject = new BehaviorSubject<number>(0);
  private previousRollOddsSubject = new BehaviorSubject<number>(0);

  rollNumber$ = this.rollNumberSubject.asObservable();
  currentScore$ = this.currentScoreSubject.asObservable();
  highScore$ = this.highScoreSubject.asObservable();
  previousRollNumber$ = this.previousRollNumberSubject.asObservable();
  previousRollOdds$ = this.previousRollOddsSubject.asObservable();

  constructor() { }

  private readonly TOTAL_CHOICES: number = 20;

  roll(): number {
    const roll = Math.floor(Math.random() * this.TOTAL_CHOICES);
    this.rollNumberSubject.next(roll);

    if (roll === this.dontRoll) {
      this.previousRollNumberSubject.next(this.currentScoreSubject.value);
      this.calculateOdds(this.currentScoreSubject.value);
      const high = Math.max(this.highScoreSubject.value, this.currentScoreSubject.value);
      this.highScoreSubject.next(high);
      this.currentScoreSubject.next(0);
    } else {
      this.currentScoreSubject.next(this.currentScoreSubject.value + 1);
    }

    return roll;
  }

  calculateOdds(spinsSurvived: number) {
    const chanceLose = 1 / this.TOTAL_CHOICES;
    console.log(chanceLose)
    const chanceSurvive = 1 - chanceLose;
    const odds = Math.pow(chanceSurvive, spinsSurvived) * 100;
    const roundedOdds = Math.round(odds * 100) / 100;
    this.previousRollOddsSubject.next(roundedOdds);
  }

}
