import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantianaComp1Component } from './santiana-comp1.component';

describe('SantianaComp1Component', () => {
  let component: SantianaComp1Component;
  let fixture: ComponentFixture<SantianaComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantianaComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantianaComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
