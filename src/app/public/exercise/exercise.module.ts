import { VideosComponent } from './../components/videos/videos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesComponent } from './container/exercises/exercises.component';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './container/exercise/exercise.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ExercisesComponent },
  { path: 'details/:id', component: ExerciseComponent },
];

@NgModule({
  declarations: [
    ExercisesComponent,
    ExerciseComponent,
    VideosComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ExerciseModule { }



