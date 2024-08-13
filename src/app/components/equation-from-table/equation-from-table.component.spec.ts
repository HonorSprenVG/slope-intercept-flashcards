/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquationFromTableComponent } from './equation-from-table.component';

describe('EquationFromTableComponent', () => {
  let component: EquationFromTableComponent;
  let fixture: ComponentFixture<EquationFromTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationFromTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationFromTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
