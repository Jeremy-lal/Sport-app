import { ExercisesService } from '../../../../core/services/exercices.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-muscle',
  templateUrl: './search-muscle.component.html',
  styleUrls: ['./search-muscle.component.scss']
})
export class SearchMuscleComponent implements OnInit {
  @Output() searchParams = new EventEmitter()
  muscles$!: Observable<string[]>

  constructor(private exercisesService: ExercisesService) {
  }

  ngOnInit(): void {
    this.muscles$ = this.exercisesService.getBodyParts();
  }

  search(part: string) {
    this.searchParams.emit({
      type: 'part',
      param: part
    })
  }

}
