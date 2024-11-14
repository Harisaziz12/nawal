import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBuilderComponent } from './credit-builder.component';

describe('CreditBuilderComponent', () => {
  let component: CreditBuilderComponent;
  let fixture: ComponentFixture<CreditBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
