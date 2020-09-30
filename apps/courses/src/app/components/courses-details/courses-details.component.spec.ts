import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { CoursesDetailsComponent } from './courses-details.component';

describe('CoursesDetailsComponent', () => {
  let component: CoursesDetailsComponent;
  let fixture: ComponentFixture<CoursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetailsComponent],
      imports: [MaterialModule, FormsModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsComponent);
    component = fixture.componentInstance;
    component.selectedCourse = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
