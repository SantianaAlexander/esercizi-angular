import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divider2AngularmComponent } from './divider2-angularm.component';

describe('Divider2AngularmComponent', () => {
  let component: Divider2AngularmComponent;
  let fixture: ComponentFixture<Divider2AngularmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divider2AngularmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Divider2AngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
