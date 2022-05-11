import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishComponent } from './accomplish.component';

describe('AccomplishComponent', () => {
  let component: AccomplishComponent;
  let fixture: ComponentFixture<AccomplishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomplishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
