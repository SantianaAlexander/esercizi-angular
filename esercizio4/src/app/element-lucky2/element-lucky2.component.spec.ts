import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLucky2Component } from './element-lucky2.component';

describe('ElementLucky2Component', () => {
  let component: ElementLucky2Component;
  let fixture: ComponentFixture<ElementLucky2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementLucky2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementLucky2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
