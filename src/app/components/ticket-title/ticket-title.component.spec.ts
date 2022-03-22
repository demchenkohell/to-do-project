import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTitleComponent } from './ticket-title.component';

describe('TicketTitleComponent', () => {
  let component: TicketTitleComponent;
  let fixture: ComponentFixture<TicketTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
