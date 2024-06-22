import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookCompanyComponent } from './hook-company.component';

describe('HookCompanyComponent', () => {
  let component: HookCompanyComponent;
  let fixture: ComponentFixture<HookCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
