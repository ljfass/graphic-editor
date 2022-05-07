import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSettingComponent } from './from-setting.component';

describe('FromSettingComponent', () => {
  let component: FromSettingComponent;
  let fixture: ComponentFixture<FromSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
