import { RouterModule } from '@angular/router';
import { ExerciseCardComponent } from './components/exercise-card';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ExerciseCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    ExerciseCardComponent
  ]
})
export class ShareModule { }
