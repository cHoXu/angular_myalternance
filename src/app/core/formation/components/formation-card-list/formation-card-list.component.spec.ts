import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCardListComponent } from './formation-card-list.component';

describe('FormationCardListComponent', () => {
  let component: FormationCardListComponent;
  let fixture: ComponentFixture<FormationCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
