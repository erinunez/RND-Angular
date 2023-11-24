import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsHandlingComponent } from './events-handling.component';

describe('EventsHandlingComponent', () => {
  let component: EventsHandlingComponent;
  let fixture: ComponentFixture<EventsHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsHandlingComponent]
    });
    fixture = TestBed.createComponent(EventsHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
