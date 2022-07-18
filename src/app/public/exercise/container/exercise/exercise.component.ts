import { Observable, tap } from 'rxjs';
import { VideoService } from '../../../../core/services/video.service';
import { Exercise } from './../../../../share/models/exercise';
import { ExercisesService } from '../../../../core/services/exercices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  exercise$!: Observable<Exercise>;
  videos$!: Observable<any>

  constructor(private route: ActivatedRoute, private exercisesService: ExercisesService, private videoService: VideoService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params['id']
    this.exercise$ = this.exercisesService.getById(params).pipe(
      tap(data => this.videos$ = this.videoService.getRelatedVideo(data.name))
    )
  }
}
