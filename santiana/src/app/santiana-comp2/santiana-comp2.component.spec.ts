import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantianaComp2Component } from './santiana-comp2.component';

describe('SantianaComp2Component', () => {
  let component: SantianaComp2Component;
  let fixture: ComponentFixture<SantianaComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantianaComp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantianaComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
