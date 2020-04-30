import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedRightComponent } from './reserved-right.component';

describe('ReservedRightComponent', () => {
  let component: ReservedRightComponent;
  let fixture: ComponentFixture<ReservedRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
