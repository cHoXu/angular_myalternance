import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHookComponent } from './company-hook.component';

describe('CompanyHookComponent', () => {
  let component: CompanyHookComponent;
  let fixture: ComponentFixture<CompanyHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyHookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
