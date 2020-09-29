import { Component, OnInit } from '@angular/core';
import { Course } from '@sun/data';
import { CoursesService } from '../../shared/services/courses/courses.service';
@Component({
  selector: 'sun-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  
  courseList = null;
  selectedCourse = null;
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courseList = this.coursesService.getAll();
  }

  resetSelectedCourse() {
    const clearCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
    this.selectedCourse = clearCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  cancelCourse() {
    this.resetSelectedCourse();
  }
  saveCourse(){
    console.log('saving...');
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId);
  }

}
