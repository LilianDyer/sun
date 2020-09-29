import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = [
    {
      id: 1,
      title: 'Angular 101',
      description: 'Learn how to write components',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular Component Testing',
      description: 'Learn how to test components',
      percentComplete: 10,
      favorite: true
    },
    {
      id: 3,
      title: 'Javascript Fundamentals',
      description: 'All about JS',
      percentComplete: 50,
      favorite: true
    },
    {
      id: 4,
      title: 'Functional Programming basics',
      description: 'Operations on Arrays',
      percentComplete: 50,
      favorite: true
    },
    {
      id: 5,
      title: 'HTML, CSS',
      description: 'Using Angular Material, etc.',
      percentComplete: 75,
      favorite: true
    },
    {
      id: 6,
      title: 'Typescript',
      description: 'All you need to know about Typescript',
      percentComplete: 90,
      favorite: false
    },
    {
      id: 7,
      title: 'Rxjs - Observables',
      description: 'Most used operators',
      percentComplete: 50,
      favorite: false
    },
    {
      id: 8,
      title: 'NgRx - the Store',
      description: 'Hands on workshop',
      percentComplete: 50,
      favorite: true
    }
  ]

  constructor() { }

  getAll() {
    return this.courses;
  }

  find(courseId: number) {
    return this.courses.find(c => c.id === courseId);
  }

  create(course) {
      console.log('creates a course');
  }

  update(course) {
    console.log('update a course');
  }

  delete(courseId: number) {
    console.log('delete course');
  }
}
