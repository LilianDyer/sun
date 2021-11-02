import { Component, Input, OnInit } from '@angular/core';
import { delay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'sun-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  list: string[] = [
    'Angular',
    'RxJs',
    'React',
    'TailWind',
    'NgRx'
  ];
  @Input()
  course: string;

  constructor() { }

  ngOnInit(): void {
        
  }

  onClickArray() {
    this.sleep(5);
    this.list.push(`${this.course}`);
  };

  sleep(seconds: number) {
    let a = new Date().getTime() + (seconds * 1000);
    while(new Date().getTime() <= a){};
  }

}
