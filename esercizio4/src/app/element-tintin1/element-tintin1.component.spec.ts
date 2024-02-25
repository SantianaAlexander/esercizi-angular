import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTintin1Component } from './element-tintin1.component';

describe('ElementTintin1Component', () => {
  let component: ElementTintin1Component;
  let fixture: ComponentFixture<ElementTintin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementTintin1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementTintin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
