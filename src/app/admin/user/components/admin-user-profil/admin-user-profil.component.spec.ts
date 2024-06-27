import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserProfilComponent } from './admin-user-profil.component';

describe('AdminUserProfilComponent', () => {
  let component: AdminUserProfilComponent;
  let fixture: ComponentFixture<AdminUserProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
