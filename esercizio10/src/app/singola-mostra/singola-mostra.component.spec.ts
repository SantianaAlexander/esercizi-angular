import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingolaMostraComponent } from './singola-mostra.component';

describe('SingolaMostraComponent', () => {
  let component: SingolaMostraComponent;
  let fixture: ComponentFixture<SingolaMostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingolaMostraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingolaMostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
