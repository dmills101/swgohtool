import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticlegendsComponent } from './galacticlegends.component';

describe('GalacticlegendsComponent', () => {
  let component: GalacticlegendsComponent;
  let fixture: ComponentFixture<GalacticlegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalacticlegendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalacticlegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
