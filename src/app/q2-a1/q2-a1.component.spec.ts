import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q2A1Component } from './q2-a1.component';

describe('Q2A1Component', () => {
  let component: Q2A1Component;
  let fixture: ComponentFixture<Q2A1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q2A1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q2A1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
