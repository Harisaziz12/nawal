import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyServicesComponent } from './money-services.component';

describe('MoneyServicesComponent', () => {
  let component: MoneyServicesComponent;
  let fixture: ComponentFixture<MoneyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
