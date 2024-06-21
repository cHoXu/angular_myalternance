import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOffersComponent } from './last-offers.component';

describe('LastOffersComponent', () => {
  let component: LastOffersComponent;
  let fixture: ComponentFixture<LastOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
