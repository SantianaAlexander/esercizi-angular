import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementLucky1Component } from './element-lucky1.component';

describe('ElementLucky1Component', () => {
  let component: ElementLucky1Component;
  let fixture: ComponentFixture<ElementLucky1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementLucky1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementLucky1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
