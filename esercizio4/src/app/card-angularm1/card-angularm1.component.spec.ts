import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAngularm1Component } from './card-angularm1.component';

describe('CardAngularm1Component', () => {
  let component: CardAngularm1Component;
  let fixture: ComponentFixture<CardAngularm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAngularm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAngularm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
