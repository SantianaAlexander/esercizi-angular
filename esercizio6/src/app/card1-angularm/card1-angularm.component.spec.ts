import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1AngularmComponent } from './card1-angularm.component';

describe('Card1AngularmComponent', () => {
  let component: Card1AngularmComponent;
  let fixture: ComponentFixture<Card1AngularmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1AngularmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card1AngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
