import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModule } from './exercise/exercise.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'exercises', loadChildren: () => import('./exercise/exercise.module').then(m => m.ExerciseModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HomeModule,
    ExerciseModule
  ]
})
export class PublicModule { }
