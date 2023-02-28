import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmicronComponent } from './omicron.component';

describe('OmicronComponent', () => {
  let component: OmicronComponent;
  let fixture: ComponentFixture<OmicronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmicronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmicronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
