import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailConfirmFormComponent } from './input-email-confirm-form.component';

describe('InputEmailConfirmFormComponent', () => {
  let component: InputEmailConfirmFormComponent;
  let fixture: ComponentFixture<InputEmailConfirmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEmailConfirmFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEmailConfirmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
