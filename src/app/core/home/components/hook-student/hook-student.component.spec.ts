import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookStudentComponent } from './hook-student.component';

describe('HookStudentComponent', () => {
  let component: HookStudentComponent;
  let fixture: ComponentFixture<HookStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
