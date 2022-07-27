import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  })

  describe('simple html', () => {
    it('should have a picture logo', () => {
      expect(fixture.debugElement.query(By.css('[data-test="logo"]'))).toBeTruthy()
    })

    it('should have link to 2 pages', () => {
      expect(fixture.debugElement.query(By.css('[data-test="home-type"]'))).toBeTruthy()
      expect(fixture.debugElement.query(By.css('[data-test="exercises-type"]'))).toBeTruthy()
    })
  })

  describe('navigation', () => {
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

    it('Should navigate to /home on home link click',
      () => {
        spyOn(router, 'navigateByUrl');

        const homeLink = fixture.debugElement.query(By.css('[data-test="home-type"] a')).nativeElement
        homeLink.click();

        expect(router.navigateByUrl).
          toHaveBeenCalledWith(router.createUrlTree(['/home']),
            { skipLocationChange: false, replaceUrl: false, state: undefined });
      });

    it('Should navigate to /exercises on exercises link click',
      () => {
        spyOn(router, 'navigateByUrl');

        const exercisesLink = fixture.debugElement.query(By.css('[data-test="exercises-type"] a')).nativeElement
        exercisesLink.click();

        expect(router.navigateByUrl).
          toHaveBeenCalledWith(router.createUrlTree(['/exercises']),
            { skipLocationChange: false, replaceUrl: false, state: undefined });
      });
  });
})

