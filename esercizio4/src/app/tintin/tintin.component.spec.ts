import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintinComponent } from './tintin.component';

describe('TintinComponent', () => {
  let component: TintinComponent;
  let fixture: ComponentFixture<TintinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TintinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TintinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
