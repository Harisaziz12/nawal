import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyAccessComponent } from './money-access.component';

describe('MoneyAccessComponent', () => {
  let component: MoneyAccessComponent;
  let fixture: ComponentFixture<MoneyAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
