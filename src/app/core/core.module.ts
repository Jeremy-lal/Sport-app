import { RouterModule } from '@angular/router';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule

  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
