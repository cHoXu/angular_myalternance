import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOfferCardComponent } from './subscription-offer-card.component';

describe('SubscriptionOfferCardComponent', () => {
  let component: SubscriptionOfferCardComponent;
  let fixture: ComponentFixture<SubscriptionOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionOfferCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
