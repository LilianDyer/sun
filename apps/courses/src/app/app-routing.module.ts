import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './components/courses/courses.component';
import { QuotesComponent } from './components/quotes/quotes.component';

const routes: Routes = [
    { path: 'quotes', component: QuotesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '**', redirectTo: '/courses'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }