import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTestcaseComponent } from './with-testcase.component';

describe('WithTestcaseComponent', () => {

  let component: WithTestcaseComponent;

  let fixture: ComponentFixture<WithTestcaseComponent>;

  // ========================================
  // BEFORE EACH
  // ========================================

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [WithTestcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTestcaseComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // ========================================
  // COMPONENT CREATE TEST
  // ========================================

  it('should create component', () => {

    expect(component).toBeTruthy();

  });

  // ========================================
  // NAME VARIABLE TEST
  // ========================================

  it('should have empty name initially', () => {

    expect(component.name).toBe('');

  });

  // ========================================
  // EMAIL VARIABLE TEST
  // ========================================

  it('should have empty email initially', () => {

    expect(component.email).toBe('');

  });

  // ========================================
  // NAME VALUE TEST
  // ========================================

  it('should set name value correctly', () => {

    component.name = 'Kong';

    expect(component.name).toBe('Kong');

  });

  // ========================================
  // EMAIL VALUE TEST
  // ========================================

  it('should set email value correctly', () => {

    component.email = 'kong@gmail.com';

    expect(component.email).toBe('kong@gmail.com');

  });

  // ========================================
  // REGISTER FUNCTION TEST
  // ========================================

  it('should call register function', () => {

    spyOn(window, 'alert');

    component.name = 'Kong';

    component.email = 'kong@gmail.com';

    component.register();

    expect(window.alert)
    .toHaveBeenCalledWith('Register Successfully');

  });

  // ========================================
  // ALERT TEST
  // ========================================

  it('should show alert one time', () => {

    spyOn(window, 'alert');

    component.register();

    expect(window.alert).toHaveBeenCalledTimes(1);

  });

});