import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sun-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  list: string[] = [
    'Angular 101'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
