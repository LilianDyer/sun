import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'sun-courses-rxjs',
  templateUrl: './courses-rxjs.component.html',
  styleUrls: ['./courses-rxjs.component.scss']
})
export class CoursesRxjsComponent implements OnInit {
  title = "List of Courses with RxJs";
  list$: Observable<string[]> =  of([
    'Angular',
    'RxJs',
    'React',
    'TailWind',
    'NgRx'
  ]);

  constructor() { }

  ngOnInit(): void {
    
  }

}
