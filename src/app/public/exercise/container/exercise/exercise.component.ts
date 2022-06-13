import { Observable } from 'rxjs';
import { VideoService } from './../../../services/video.service';
import { Exercise } from './../../../../share/models/exercise';
import { ExercisesService } from './../../../../share/services/exercices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  exercise!: Exercise;
  videos$!: Observable<any>

  constructor(private route: ActivatedRoute, private exercisesService: ExercisesService, private videoService: VideoService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params['id']
    this.exercisesService.getById(params).subscribe((data) => {
      this.exercise = data
      this.videos$ = this.videoService.getRelatedVideo(data.name)
    })
  }



}
