import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutTestcaseComponent } from './without-testcase.component';

describe('WithoutTestcaseComponent', () => {
  let component: WithoutTestcaseComponent;
  let fixture: ComponentFixture<WithoutTestcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithoutTestcaseComponent]
    });
    fixture = TestBed.createComponent(WithoutTestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
