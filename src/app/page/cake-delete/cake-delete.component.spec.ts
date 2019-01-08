import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDelete } from './cake-delete.component';

describe('CakeAddEditComponent', () => {
  let component: CakeDelete;
  let fixture: ComponentFixture<CakeDelete>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDelete ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
