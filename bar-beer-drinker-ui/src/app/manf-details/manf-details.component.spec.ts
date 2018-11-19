import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfDetailsComponent } from './manf-details.component';

describe('ManfDetailsComponent', () => {
  let component: ManfDetailsComponent;
  let fixture: ComponentFixture<ManfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
