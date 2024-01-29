import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio3Component3Component } from './esercizio3-component3.component';

describe('Esercizio3Component3Component', () => {
  let component: Esercizio3Component3Component;
  let fixture: ComponentFixture<Esercizio3Component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio3Component3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio3Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
