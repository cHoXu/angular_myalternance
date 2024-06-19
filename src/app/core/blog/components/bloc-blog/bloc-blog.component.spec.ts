import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocBlogComponent } from './bloc-blog.component';

describe('BlocBlogComponent', () => {
  let component: BlocBlogComponent;
  let fixture: ComponentFixture<BlocBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
