import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventslowComponent } from './eventslow.component';

describe('EventslowComponent', () => {
  let component: EventslowComponent;
  let fixture: ComponentFixture<EventslowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventslowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventslowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
