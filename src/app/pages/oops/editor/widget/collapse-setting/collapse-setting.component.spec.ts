import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSettingComponent } from './collapse-setting.component';

describe('CollapseSettingComponent', () => {
  let component: CollapseSettingComponent;
  let fixture: ComponentFixture<CollapseSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
