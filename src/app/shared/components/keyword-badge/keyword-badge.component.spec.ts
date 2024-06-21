import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordBadgeComponent } from './keyword-badge.component';

describe('KeywordBadgeComponent', () => {
  let component: KeywordBadgeComponent;
  let fixture: ComponentFixture<KeywordBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
