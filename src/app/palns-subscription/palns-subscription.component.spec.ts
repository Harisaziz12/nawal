import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalnsSubscriptionComponent } from './palns-subscription.component';

describe('PalnsSubscriptionComponent', () => {
  let component: PalnsSubscriptionComponent;
  let fixture: ComponentFixture<PalnsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalnsSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalnsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
