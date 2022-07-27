import { Exercise } from './../../../../share/models/exercise';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchResultsComponent } from "./search-results.component"
import { of } from 'rxjs';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let expectedExercises: Exercise[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchResultsComponent
      ]
    }).compileComponents;

    fixture = TestBed.createComponent(SearchResultsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  describe('comportment with no data', () => {
    beforeEach(() => {
      spyOn(component, 'changePage')
    })
    it('should initiate the current page to 0', () => {
      expect(component.currentPage).toEqual(0)
      expect(component.changePage).not.toHaveBeenCalled()
    })

    it('should initiate the current page to 0', () => {
      expect(component.nbPage).toEqual(0)
    })
  })

  describe('comportment with no data', () => {
    beforeEach(() => {
      spyOn(component, 'changePage')
      expectedExercises =
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

      component.results$ = of(expectedExercises)

      fixture.detectChanges();
    })

    it('should initiate the current page to 0', fakeAsync(() => {
      // component.results$.subscribe(data => console.log(data))
      expect(component.currentPage).toEqual(0)
      // expect(component.changePage).toHaveBeenCalled()
      // tick(1000)
      // expect(component.changePage).toHaveBeenCalledWith(0)
    }))

    it('should calculate 1 page', () => {
      expect(component.nbPage).toEqual(1)
    })
  })

  xdescribe('click on a different page', () => {

  })

  describe('showPageButton', () => {
    it('should return false if the index is farest than 2', () => {
      expect(component.showPageButton(3)).toBeFalse()
      component.currentPage = 5
      expect(component.showPageButton(1)).toBeFalse()
    })

    it('should return true if the index is nearest than 2', () => {
      expect(component.showPageButton(2)).toBeTrue()
      component.currentPage = 5
      expect(component.showPageButton(3)).toBeTrue()
    })
  })
})
