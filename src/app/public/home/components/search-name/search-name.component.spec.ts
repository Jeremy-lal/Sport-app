import { SearchNameComponent } from './search-name.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchNameComponent', () => {
  let component: SearchNameComponent;
  let fixture: ComponentFixture<SearchNameComponent>;
  let de: DebugElement;
  let button: ElementRef;
  let input: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNameComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNameComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    button = de.query(By.css('button'));
    input = HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('change', () => {
    it('should emit when button is clicked', fakeAsync(() => {
      spyOn(component.searchParams, 'emit');

      expect(input.value).toBe('');
      component.name = 'front lever';

      button.nativeElement.click();

      expect(component.searchParams.emit).toHaveBeenCalledWith({
        type: 'name',
        param: 'front lever'
      });
    }))

    it('should emit when enter is press', fakeAsync(() => {
      spyOn(component.searchParams, 'emit');

      expect(input.value).toBe('');
      component.name = 'front lever';
      // input.value = "front leve"
      // input.dispatchEvent(new Event('input'))
      // fixture.detectChanges()

      input.dispatchEvent(new KeyboardEvent('keydown', {
        'key': 'Enter'
      }));

      expect(component.searchParams.emit).toHaveBeenCalledWith({
        type: 'name',
        param: 'front lever'
      });
    }))
  });
});
