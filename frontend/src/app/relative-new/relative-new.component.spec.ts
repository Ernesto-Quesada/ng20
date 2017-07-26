import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeNewComponent } from './relative-new.component';

describe('RelativeNewComponent', () => {
  let component: RelativeNewComponent;
  let fixture: ComponentFixture<RelativeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
