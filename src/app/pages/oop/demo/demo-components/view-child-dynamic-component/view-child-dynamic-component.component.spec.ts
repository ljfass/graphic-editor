import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDynamicComponentComponent } from './view-child-dynamic-component.component';

describe('ViewChildDynamicComponentComponent', () => {
  let component: ViewChildDynamicComponentComponent;
  let fixture: ComponentFixture<ViewChildDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
