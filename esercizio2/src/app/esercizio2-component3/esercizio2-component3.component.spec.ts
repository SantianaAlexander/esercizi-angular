import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio2Component3Component } from './esercizio2-component3.component';

describe('Esercizio2Component3Component', () => {
  let component: Esercizio2Component3Component;
  let fixture: ComponentFixture<Esercizio2Component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esercizio2Component3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Esercizio2Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
