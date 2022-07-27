import { VideoService } from './../../../../core/services/video.service';
import { By } from '@angular/platform-browser';
import { VideosComponent } from './../../../components/videos/videos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Exercise } from "src/app/share/models/exercise";
import { ExerciseComponent } from "./exercise.component";
import { ExercisesService } from 'src/app/core/services/exercices.service';
import { spyOnClass } from 'jasmine-es6-spies';
import { MockComponent } from 'ng-mocks';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  let videosComponent: VideosComponent;

  let exercisesService: jasmine.SpyObj<ExercisesService>;
  let videosService: jasmine.SpyObj<VideoService>;

  let expectedExercise: Exercise;
  let expectedVideos: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExerciseComponent,
        MockComponent(VideosComponent)
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: ExercisesService, useFactory: () => spyOnClass(ExercisesService) },
        { provide: VideoService, useFactory: () => spyOnClass(VideoService) },
      ]
    });
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;

    exercisesService = TestBed.inject(ExercisesService) as jasmine.SpyObj<ExercisesService>;

    expectedExercise = {
      bodyPart: "neck",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
      id: "1403",
      name: "neck side stretch",
      target: "levator scapulae"
    };

    exercisesService.getById.and.returnValue(of(expectedExercise));

    videosComponent = fixture.debugElement.query(By.css('app-videos')).componentInstance as VideosComponent;
    videosService = TestBed.inject(VideoService) as jasmine.SpyObj<VideoService>;

    expectedVideos = of({
      name: 'video name',
      channel: 'video Channel'
    });

    videosService.getRelatedVideo.and.returnValue(expectedVideos);

    fixture.detectChanges();
  })

  beforeEach(() => {
  })

  describe('Exercise display', () => {

    it('should display the right gif', () => {
      const img = fixture.debugElement.query(By.css('img')).nativeElement
      expect(img.src).toBe(expectedExercise.gifUrl)
    })

    it('should display the right name', () => {
      const title = fixture.debugElement.query(By.css('h1')).nativeElement
      expect(title.textContent).toBe(expectedExercise.name)
    })

    it('should display the right bodyPart', () => {
      const bodyPart = fixture.debugElement.query(By.css('[data-test="bodyPart"]')).nativeElement
      expect(bodyPart.textContent).toContain(expectedExercise.bodyPart)
    })

    it('should display the right equipment', () => {
      const equipment = fixture.debugElement.query(By.css('[data-test="equipment"]')).nativeElement
      expect(equipment.textContent).toContain(expectedExercise.equipment)
    })

    it('should display the right target', () => {
      const target = fixture.debugElement.query(By.css('[data-test="target"]')).nativeElement
      expect(target.textContent).toContain(expectedExercise.target)
    })
  })

  describe('video display', () => {

    beforeEach(() => {

      fixture.detectChanges()
    })
    it('should display the right name', () => {
      const title = fixture.debugElement.query(By.css('h2')).nativeElement
      expect(title.textContent).toBe(`Watch ${expectedExercise.name} exercises video`)
    })

    it('should receive the good videos', (done) => {
      videosComponent.videos$.subscribe(dataChild => {
        component.videos$.subscribe(dataParent => {
          expect(JSON.stringify(dataChild)).toEqual(JSON.stringify(dataParent))
          done()
        })
      })
    })
  })
})
