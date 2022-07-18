import { Exercise } from 'src/app/share/models/exercise';
import { ExercisesService } from './exercices.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from 'src/app/test-helper/async-helper';



describe('ExercisesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ExercisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExercisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBodyParts', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new ExercisesService(httpClientSpy);
    });

    it('should return expected body parts (HttpClient called once)', (done: DoneFn) => {
      const expectedBodyParts: string[] =
        ['back', 'cardio', 'chest'];

      httpClientSpy.get.and.returnValue(asyncData(expectedBodyParts));

      service.getBodyParts().subscribe({
        next: bodyParts => {
          expect(bodyParts)
            .withContext('expected bodyParts')
            .toEqual(expectedBodyParts);
          done();
        },
        error: done.fail
      });
      expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      service.getBodyParts().subscribe({
        next: bodyParts => done.fail('expected an error, not bodyParts'),
        error: error => {
          expect(error.error).toContain('test 404 error');
          done();
        }
      });
    });
  })

  describe('getByBodyParts', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new ExercisesService(httpClientSpy);
    });

    it('should return expected body parts (HttpClient called once)', (done: DoneFn) => {
      const expectedExercises: Exercise[] =
        [{
          bodyPart: "neck",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
          id: "1403",
          name: "neck side stretch",
          target: "levator scapulae"
        },
        {
          bodyPart: "neck",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0716.gif",
          id: "0716",
          name: "side push neck stretch",
          target: "levator scapulae"
        }
        ];

      httpClientSpy.get.and.returnValue(asyncData(expectedExercises));

      service.getByBodyParts('chest').subscribe({
        next: exercises => {
          expect(exercises)
            .withContext('expected exercises')
            .toEqual(expectedExercises);
          done();
        },
        error: done.fail
      });
      expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      service.getByBodyParts('chest').subscribe({
        next: exercises => done.fail('expected an error, not exercises'),
        error: error => {
          expect(error.error).toContain('test 404 error');
          done();
        }
      });
    });
  })

  describe('getByName', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new ExercisesService(httpClientSpy);
    });

    it('should return expected body parts (HttpClient called once)', (done: DoneFn) => {
      const expectedExercises: Exercise[] =
        [{
          bodyPart: "waist",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3296.gif",
          id: "3296",
          name: "front lever",
          target: "abs"
        },
        {
          bodyPart: "back",
          equipment: "body weight",
          gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3295.gif",
          id: "3295",
          name: "front lever reps",
          target: "upper back"
        }
        ];

      httpClientSpy.get.and.returnValue(asyncData(expectedExercises));

      service.getByName('front lever').subscribe({
        next: exercises => {
          expect(exercises)
            .withContext('expected exercises')
            .toEqual(expectedExercises);
          done();
        },
        error: done.fail
      });
      expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      service.getByName('front lever').subscribe({
        next: exercises => done.fail('expected an error, not exercises'),
        error: error => {
          expect(error.error).toContain('test 404 error');
          done();
        }
      });
    });
  })

  describe('getById', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new ExercisesService(httpClientSpy);
    });

    it('should return expected body parts (HttpClient called once)', (done: DoneFn) => {
      const expectedExercise: Exercise =
      {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3296.gif",
        id: "3296",
        name: "front lever",
        target: "abs"
      };

      httpClientSpy.get.and.returnValue(asyncData(expectedExercise));

      service.getById('front lever').subscribe({
        next: exercise => {
          expect(exercise)
            .withContext('expected exercise')
            .toEqual(expectedExercise);
          done();
        },
        error: done.fail
      });
      expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      service.getById('front lever').subscribe({
        next: exercise => done.fail('expected an error, not exercise'),
        error: error => {
          expect(error.error).toContain('test 404 error');
          done();
        }
      });
    });
  })
});

