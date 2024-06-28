import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationMainComponent } from './formation-main.component';

describe('FormationMainComponent', () => {
  let component: FormationMainComponent;
  let fixture: ComponentFixture<FormationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
