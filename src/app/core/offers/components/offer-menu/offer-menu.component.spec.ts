import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMenuComponent } from './offer-menu.component';

describe('OfferMenuComponent', () => {
  let component: OfferMenuComponent;
  let fixture: ComponentFixture<OfferMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
