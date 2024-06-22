import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubscriptionBlockComponent } from './student-subscription-block.component';

describe('StudentSubscriptionBlockComponent', () => {
  let component: StudentSubscriptionBlockComponent;
  let fixture: ComponentFixture<StudentSubscriptionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSubscriptionBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSubscriptionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
