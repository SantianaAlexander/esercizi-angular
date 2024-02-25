import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAngularmComponent } from './tabs-angularm.component';

describe('TabsAngularmComponent', () => {
  let component: TabsAngularmComponent;
  let fixture: ComponentFixture<TabsAngularmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsAngularmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsAngularmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
