import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralcategoryComponent } from './generalcategory.component';

describe('GeneralcategoryComponent', () => {
  let component: GeneralcategoryComponent;
  let fixture: ComponentFixture<GeneralcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
         
        HttpClientModule

      ], declarations: [ GeneralcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
