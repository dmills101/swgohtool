import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLogoComponent } from './image-logo.component';

describe('ImageLogoComponent', () => {
  let component: ImageLogoComponent;
  let fixture: ComponentFixture<ImageLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
