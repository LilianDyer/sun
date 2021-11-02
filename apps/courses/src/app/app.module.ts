import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoursesRxjsComponent } from './components/courses/courses-rxjs/courses-rxjs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CoursesRxjsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
