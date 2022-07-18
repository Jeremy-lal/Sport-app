import { ExercisesService } from '../../../../core/services/exercices.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/share/models/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results$!: Observable<Exercise[]>

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
  }

  search($event: { type: string, param: string }) {
    if ($event.type === 'name') {
      this.results$ = this.exercisesService.getByName($event.param)
    } else {
      this.results$ = this.exercisesService.getByBodyParts($event.param)
    }
  }

}
