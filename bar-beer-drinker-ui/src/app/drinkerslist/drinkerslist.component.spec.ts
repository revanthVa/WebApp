import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerslistComponent } from './drinkerslist.component';

describe('DrinkerslistComponent', () => {
  let component: DrinkerslistComponent;
  let fixture: ComponentFixture<DrinkerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
