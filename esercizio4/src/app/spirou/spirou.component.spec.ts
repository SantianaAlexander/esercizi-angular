import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirouComponent } from './spirou.component';

describe('SpirouComponent', () => {
  let component: SpirouComponent;
  let fixture: ComponentFixture<SpirouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpirouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpirouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
