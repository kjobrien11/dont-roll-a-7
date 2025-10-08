import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardSqaureComponent } from './game-board-sqaure.component';

describe('GameBoardSqaureComponent', () => {
  let component: GameBoardSqaureComponent;
  let fixture: ComponentFixture<GameBoardSqaureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardSqaureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBoardSqaureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
