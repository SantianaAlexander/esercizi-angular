import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio3Component1Component } from './esercizio3-component1.component';

describe('Esercizio3Component1Component', () => {
  let component: Esercizio3Component1Component;
  let fixture: ComponentFixture<Esercizio3Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio3Component1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio3Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
