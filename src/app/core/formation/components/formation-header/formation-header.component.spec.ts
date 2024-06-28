import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationHeaderComponent } from './formation-header.component';

describe('FormationHeaderComponent', () => {
  let component: FormationHeaderComponent;
  let fixture: ComponentFixture<FormationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
