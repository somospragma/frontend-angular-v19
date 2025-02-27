import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    buttonElement = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the text passed to the "text" input', () => {
    component.text = 'Test Button';
    fixture.detectChanges();
    expect(buttonElement.textContent).toContain('Test Button');
  });

  it('should call the "action" function when clicked', () => {
    const actionSpy = jasmine.createSpy('actionSpy');
    component.action = actionSpy;
    fixture.detectChanges();
    buttonElement.click();
    expect(actionSpy).toHaveBeenCalled();
  });

  it('should pass the correct parameter to the "action" function', () => {
    const actionSpy = jasmine.createSpy('actionSpy');
    const testParam = 42;
    component.param = testParam;
    component.action = actionSpy;

    fixture.detectChanges();
    buttonElement.click();

    expect(actionSpy).toHaveBeenCalledWith(testParam);
  });

  it('should use a default empty action if no action is passed', () => {
    const defaultActionSpy = spyOn(component, 'action').and.callThrough();
    component.action();
    expect(defaultActionSpy).toHaveBeenCalled();
  });
});
