import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSpirou2Component } from './element-spirou2.component';

describe('ElementSpirou2Component', () => {
  let component: ElementSpirou2Component;
  let fixture: ComponentFixture<ElementSpirou2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSpirou2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementSpirou2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
