import { spyOnClass } from 'jasmine-es6-spies';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercisesService } from 'src/app/core/services/exercices.service';

import { SearchMuscleComponent } from './search-muscle.component';
import { of } from 'rxjs';

describe('SearchMuscleComponent', () => {
  let component: SearchMuscleComponent;
  let fixture: ComponentFixture<SearchMuscleComponent>;
  let exercisesService: jasmine.SpyObj<ExercisesService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMuscleComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ExercisesService, useFactory: () => spyOnClass(ExercisesService) },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMuscleComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    exercisesService = TestBed.inject(ExercisesService) as jasmine.SpyObj<ExercisesService>;

    const bodyParts = ['chest', 'legs', 'cardio'];
    exercisesService.getBodyParts.and.returnValue(of(bodyParts));

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show body parts', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="body-part"]').length).toBe(3);

  });

  describe('change', () => {
    it('should emit when the body part is clicked', () => {
      spyOn(component.searchParams, 'emit');
      component.search('legs')

      expect(component.searchParams.emit).toHaveBeenCalledWith({
        type: 'part',
        param: 'legs'
      });
    });
  });
});
