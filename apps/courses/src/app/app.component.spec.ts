import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from '../app/app-routing.module';
import { RouterModule } from '@angular/router';



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoursesComponent
      ],
      imports: [
        MaterialModule,
        AppRoutingModule,
        RouterModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
