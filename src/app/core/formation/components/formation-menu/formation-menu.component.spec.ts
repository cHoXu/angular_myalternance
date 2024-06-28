import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationMenuComponent } from './formation-menu.component';

describe('FormationMenuComponent', () => {
  let component: FormationMenuComponent;
  let fixture: ComponentFixture<FormationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
