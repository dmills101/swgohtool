import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCardComponent } from './sw-card.component';

describe('SwCardComponent', () => {
  let component: SwCardComponent;
  let fixture: ComponentFixture<SwCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
