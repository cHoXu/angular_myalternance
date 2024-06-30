import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTrustComponent } from './company-trust.component';

describe('CompanyTrustComponent', () => {
  let component: CompanyTrustComponent;
  let fixture: ComponentFixture<CompanyTrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyTrustComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
