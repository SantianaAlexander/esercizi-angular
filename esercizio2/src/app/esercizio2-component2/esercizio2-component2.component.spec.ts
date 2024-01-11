import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio2Component2Component } from './esercizio2-component2.component';

describe('Esercizio2Component2Component', () => {
  let component: Esercizio2Component2Component;
  let fixture: ComponentFixture<Esercizio2Component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio2Component2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio2Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
