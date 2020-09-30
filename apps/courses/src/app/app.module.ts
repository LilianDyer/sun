import { AppRoutingModule } from '../app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataModule } from '@sun/data';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { ClassicQuotesService } from './shared/services/quotes/classic-quotes.service';
import { CoursesService } from './shared/services/courses/courses.service';
import { LessonsService } from './shared/services/lessons/lessons.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuotesDetailsComponent } from './components/quotes-details/quotes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    QuotesComponent,
    QuotesDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [CoursesService, ClassicQuotesService, LessonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
