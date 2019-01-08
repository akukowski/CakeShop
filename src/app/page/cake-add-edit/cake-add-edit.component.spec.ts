import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeAddEditComponent } from './cake-add-edit.component';

describe('CakeAddEditComponent', () => {
  let component: CakeAddEditComponent;
  let fixture: ComponentFixture<CakeAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
