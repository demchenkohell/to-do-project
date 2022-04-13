import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekTabComponent } from './week-tab.component';

describe('WeekTabComponent', () => {
  let component: WeekTabComponent;
  let fixture: ComponentFixture<WeekTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
