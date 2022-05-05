import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdlrDragBugComponent } from './udlr-drag-bug.component';

describe('UdlrDragBugComponent', () => {
  let component: UdlrDragBugComponent;
  let fixture: ComponentFixture<UdlrDragBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdlrDragBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdlrDragBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
