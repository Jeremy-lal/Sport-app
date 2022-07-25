import { Exercise } from 'src/app/share/models/exercise';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ExerciseCardComponent } from './exercise-card';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/app/test-helper/router-link-stub.directive';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('ExerciseCardComponent', () => {
  let component: ExerciseCardComponent;
  let fixture: ComponentFixture<ExerciseCardComponent>;
  let expectedExercise: Exercise;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseCardComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'exercises/details/:id', component: DummyComponent }
        ])
      ]
    });
    fixture = TestBed.createComponent(ExerciseCardComponent);
    component = fixture.componentInstance;

    // mock the hero supplied by the parent component
    expectedExercise = {
      bodyPart: "neck",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
      id: "1403",
      name: "neck side stretch",
      target: "levator scapulae"
    };

    component.exercise = expectedExercise;
    fixture.detectChanges();
  })

  describe('simple html', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should display exercise name', () => {
      const exerciseNameDe = fixture.debugElement.query(By.css('h3'));
      const exerciseNameEl = exerciseNameDe.nativeElement;
      expect(exerciseNameEl.textContent).toContain(expectedExercise.name);
    });

    it('should display bodyPart', () => {
      const exercisePartDe = fixture.debugElement.query(By.css('p'));
      const exercisePartEl = exercisePartDe.nativeElement;
      expect(exercisePartEl.textContent).toContain(expectedExercise.bodyPart);
    });

    it('should display bodyPart', () => {
      const exerciseImgDe = fixture.debugElement.query(By.css('img'));
      const exerciseImgEl = exerciseImgDe.nativeElement;
      expect(exerciseImgEl.src).toContain(expectedExercise.gifUrl);
    });
  })

  describe('Navigation', () => {
    let location: Location;
    let router: Router;

    beforeEach(() => {
      location = TestBed.get(Location);
      router = TestBed.get(Router);
      fixture.detectChanges();
    });
    // Navigation
    it('Should navigate to / before click on routerLink',
      () => {
        expect(location.path()).toBe('');
      }
    );

    it('Should navigate to /exercises/details/1403 on article click',
      () => {
        spyOn(router, 'navigateByUrl');

        const article = fixture.debugElement.query(By.css('article')).nativeElement
        article.click();

        expect(router.navigateByUrl).
          toHaveBeenCalledWith(router.createUrlTree(['/exercises/details/1403']),
            { skipLocationChange: false, replaceUrl: false, state: undefined });
      });
  });
});

@Component({ template: '' })
class DummyComponent { }
