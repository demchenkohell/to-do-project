import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketIconsetComponent } from './ticket-iconset.component';

describe('TicketIconsetComponent', () => {
  let component: TicketIconsetComponent;
  let fixture: ComponentFixture<TicketIconsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketIconsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketIconsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
