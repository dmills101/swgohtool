import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodteamsComponent } from './goodteams.component';

describe('GoodteamsComponent', () => {
  let component: GoodteamsComponent;
  let fixture: ComponentFixture<GoodteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodteamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
