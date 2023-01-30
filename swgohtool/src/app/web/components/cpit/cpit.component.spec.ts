import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpitComponent } from './cpit.component';

describe('CpitComponent', () => {
  let component: CpitComponent;
  let fixture: ComponentFixture<CpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
