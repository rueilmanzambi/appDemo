import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFormComponent } from './calc-form.component';

describe('CalcFormComponent', () => {
  let component: CalcFormComponent;
  let fixture: ComponentFixture<CalcFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcFormComponent]
    });
    fixture = TestBed.createComponent(CalcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
