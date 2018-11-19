import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfListComponent } from './manf-list.component';

describe('ManfListComponent', () => {
  let component: ManfListComponent;
  let fixture: ComponentFixture<ManfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
