import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsHeroComponent } from './faqs-hero.component';

describe('FaqsHeroComponent', () => {
  let component: FaqsHeroComponent;
  let fixture: ComponentFixture<FaqsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqsHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
