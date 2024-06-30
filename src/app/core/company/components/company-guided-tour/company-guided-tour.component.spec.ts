import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGuidedTourComponent } from './company-guided-tour.component';

describe('CompanyGuidedTourComponent', () => {
  let component: CompanyGuidedTourComponent;
  let fixture: ComponentFixture<CompanyGuidedTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyGuidedTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyGuidedTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
