import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhonenoComponent } from './login-phoneno.component';

describe('LoginPhonenoComponent', () => {
  let component: LoginPhonenoComponent;
  let fixture: ComponentFixture<LoginPhonenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPhonenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPhonenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
