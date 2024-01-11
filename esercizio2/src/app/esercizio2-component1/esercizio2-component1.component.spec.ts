import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio2Component1Component } from './esercizio2-component1.component';

describe('Esercizio2Component1Component', () => {
  let component: Esercizio2Component1Component;
  let fixture: ComponentFixture<Esercizio2Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio2Component1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
