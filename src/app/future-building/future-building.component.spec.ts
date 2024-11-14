import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureBuildingComponent } from './future-building.component';

describe('FutureBuildingComponent', () => {
  let component: FutureBuildingComponent;
  let fixture: ComponentFixture<FutureBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
