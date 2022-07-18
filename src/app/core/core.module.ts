import { ShareModule } from './../share/share.module';
import { PublicModule } from './../public/public.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule,
    ShareModule,
  ],
  exports: [
    NavbarComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
