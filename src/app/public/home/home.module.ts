import { ShareModule } from './../../share/share.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchNameComponent } from './components/search-name/search-name.component';
import { SearchMuscleComponent } from './components/search-muscle/search-muscle.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SearchNameComponent,
    SearchMuscleComponent,
    SearchResultsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ShareModule
  ]
})
export class HomeModule { }
