import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserOffersComponent } from './admin-user-offers.component';

describe('AdminUserOffersComponent', () => {
  let component: AdminUserOffersComponent;
  let fixture: ComponentFixture<AdminUserOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
