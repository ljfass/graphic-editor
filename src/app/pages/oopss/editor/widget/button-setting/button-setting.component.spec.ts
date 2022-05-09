import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSettingComponent } from './button-setting.component';

describe('ButtonSettingComponent', () => {
  let component: ButtonSettingComponent;
  let fixture: ComponentFixture<ButtonSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
