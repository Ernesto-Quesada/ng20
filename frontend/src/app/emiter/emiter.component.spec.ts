import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiterComponent } from './emiter.component';

describe('EmiterComponent', () => {
  let component: EmiterComponent;
  let fixture: ComponentFixture<EmiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
