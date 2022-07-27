import { RouterTestingModule } from '@angular/router/testing';
import { HeroComponent } from './hero.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });

  describe('Navigation', () => {
    let location: Location;
    let router: Router;

    beforeEach(() => {
      location = TestBed.get(Location);
      router = TestBed.get(Router);
      fixture.detectChanges();
    });

    it('Should navigate to / before click on routerLink',
      () => {
        expect(location.path()).toBe('');
      }
    );

    it('Should navigate to /exercises on button click',
      () => {
        spyOn(router, 'navigateByUrl');

        const button = fixture.debugElement.query(By.css('button')).nativeElement
        button.click();

        expect(router.navigateByUrl).
          toHaveBeenCalledWith(router.createUrlTree(['/exercises']),
            { skipLocationChange: false, replaceUrl: false, state: undefined });
      });
  });
})
