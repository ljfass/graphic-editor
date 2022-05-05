import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDynamicComponentComponent } from './drag-dynamic-component.component';

describe('DragDynamicComponentComponent', () => {
  let component: DragDynamicComponentComponent;
  let fixture: ComponentFixture<DragDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
