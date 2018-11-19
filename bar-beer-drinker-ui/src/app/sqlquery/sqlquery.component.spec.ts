import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlqueryComponent } from './sqlquery.component';

describe('SqlqueryComponent', () => {
  let component: SqlqueryComponent;
  let fixture: ComponentFixture<SqlqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
