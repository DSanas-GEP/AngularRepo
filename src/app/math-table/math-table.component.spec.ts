import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTableComponent } from './math-table.component';

describe('MathTableComponent', () => {
  let component: MathTableComponent;
  let fixture: ComponentFixture<MathTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
