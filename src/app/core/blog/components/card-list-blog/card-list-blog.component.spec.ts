import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListBlogComponent } from './card-list-blog.component';

describe('CardListBlogComponent', () => {
  let component: CardListBlogComponent;
  let fixture: ComponentFixture<CardListBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
