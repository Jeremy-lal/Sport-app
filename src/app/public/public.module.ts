import { HomeComponent } from './home/container/home/home.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModule } from './exercise/exercise.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'exercises', loadChildren: () => import('./exercise/exercise.module').then(m => m.ExerciseModule) },
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
