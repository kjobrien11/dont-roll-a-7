import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dra7ContainerComponent } from './dra7-container.component';

describe('Dra7ContainerComponent', () => {
  let component: Dra7ContainerComponent;
  let fixture: ComponentFixture<Dra7ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dra7ContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dra7ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
