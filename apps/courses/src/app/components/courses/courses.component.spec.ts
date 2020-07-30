import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { MaterialModule } from '../../material.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CoursesComponent 
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //runs ngOnInit() the first time
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Semester One Courses'`, () => {
    expect(component.title).toEqual('List of Courses');
  });
  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain(
      'List of Courses'
    );
  });

  it('should have a list', () => {
    expect(component.list.length).toEqual(1);
  });

  it('should render a list of 1 element', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('#list').textContent).toContain(
      'Angular 101'); 
  });
});
