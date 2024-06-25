import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionEmailComponent } from './accordion-email.component';

describe('AccordionEmailComponent', () => {
  let component: AccordionEmailComponent;
  let fixture: ComponentFixture<AccordionEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
