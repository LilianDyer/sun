import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRxjsComponent } from './courses-rxjs.component';

describe('CoursesRxjsComponent', () => {
  let component: CoursesRxjsComponent;
  let fixture: ComponentFixture<CoursesRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
