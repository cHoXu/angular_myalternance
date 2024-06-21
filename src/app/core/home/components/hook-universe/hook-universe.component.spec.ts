import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookUniverseComponent } from './hook-universe.component';

describe('HookUniverseComponent', () => {
  let component: HookUniverseComponent;
  let fixture: ComponentFixture<HookUniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookUniverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
