import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyLukeComponent } from './lucky-luke.component';

describe('LuckyLukeComponent', () => {
  let component: LuckyLukeComponent;
  let fixture: ComponentFixture<LuckyLukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyLukeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuckyLukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
