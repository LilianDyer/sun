import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';
@Component({
  selector: 'sun-courses-details',
  templateUrl: './courses-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesDetailsComponent implements OnInit {
  
  @Input()
  selectedCourse: Course;
    
  @Output()
  courseCancelled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  saveCourse() {
    console.log('saving...');
  }

  cancelCourse() {
    this.courseCancelled.emit();
  }

}
