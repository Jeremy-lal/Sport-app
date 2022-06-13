import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesComponent } from './container/exercises/exercises.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ExercisesComponent },
];

@NgModule({
  declarations: [
    ExercisesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ExerciseModule { }



