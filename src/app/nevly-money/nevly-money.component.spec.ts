import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevlyMoneyComponent } from './nevly-money.component';

describe('NevlyMoneyComponent', () => {
  let component: NevlyMoneyComponent;
  let fixture: ComponentFixture<NevlyMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevlyMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevlyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
