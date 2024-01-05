import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantianaComp3Component } from './santiana-comp3.component';

describe('SantianaComp3Component', () => {
  let component: SantianaComp3Component;
  let fixture: ComponentFixture<SantianaComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantianaComp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantianaComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
