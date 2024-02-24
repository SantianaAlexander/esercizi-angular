import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSpirou1Component } from './element-spirou1.component';

describe('ElementSpirou1Component', () => {
  let component: ElementSpirou1Component;
  let fixture: ComponentFixture<ElementSpirou1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSpirou1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementSpirou1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
