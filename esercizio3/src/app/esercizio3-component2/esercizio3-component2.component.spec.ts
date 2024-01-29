import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio3Component2Component } from './esercizio3-component2.component';

describe('Esercizio3Component2Component', () => {
  let component: Esercizio3Component2Component;
  let fixture: ComponentFixture<Esercizio3Component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio3Component2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio3Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
