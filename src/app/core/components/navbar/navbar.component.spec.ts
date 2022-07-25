import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let spectator: Spectator<NavbarComponent>;
  const createComponent = createComponentFactory(NavbarComponent);

  beforeEach(() => spectator = createComponent());

  describe('Navbar content', () => {
    it('should have a picture logo', () => {
      expect(spectator.query('[data-test="logo"]')).toBeTruthy()
    })

    it('should have link to 2 pages', () => {
      expect(spectator.query('[data-test="home-type"]')).toBeTruthy()
      expect(spectator.query('[data-test="exercises-type"]')).toBeTruthy()
    })
  })
});
