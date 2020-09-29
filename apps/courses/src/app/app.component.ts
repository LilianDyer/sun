import { Component } from '@angular/core';

@Component({
  selector: 'sun-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Coding Exercises';
  links = [
    { path: '/courses', icon: 'view-list', title: 'Courses' }
  ];

  constructor() { }
}
