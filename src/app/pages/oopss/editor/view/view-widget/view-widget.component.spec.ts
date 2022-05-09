import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWidgetComponent } from './view-widget.component';

describe('ViewWidgetComponent', () => {
  let component: ViewWidgetComponent;
  let fixture: ComponentFixture<ViewWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});