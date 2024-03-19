import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerAngularmComponent } from './divider-angularm.component';

describe('DividerAngularmComponent', () => {
  let component: DividerAngularmComponent;
  let fixture: ComponentFixture<DividerAngularmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerAngularmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerAngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
