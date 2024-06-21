import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOffersListComponent } from './last-offers-list.component';

describe('LastOffersListComponent', () => {
  let component: LastOffersListComponent;
  let fixture: ComponentFixture<LastOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastOffersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
