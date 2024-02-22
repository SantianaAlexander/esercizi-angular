import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAngularmComponent } from './card-angularm.component';

describe('CardAngularmComponent', () => {
  let component: CardAngularmComponent;
  let fixture: ComponentFixture<CardAngularmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAngularmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
