import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let comp: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  const expectedVideos: any = [
    {
      video: {
        channelName: 'Channel 1',
        title: 'title 1',
        thumbnails: [{ url: 'url 1' }]
      },
    },
    {
      video: {
        channelName: 'Channel 2',
        title: 'title 2',
        thumbnails: [{ url: 'url 2' }]
      }
    },
    {
      video: {
        channelName: 'Channel 3',
        title: 'title 3',
        thumbnails: [{ url: 'url 3' }]
      }
    },
  ]

  beforeEach(() => {
    TestBed
      .configureTestingModule({ declarations: [VideosComponent] })
    fixture = TestBed.createComponent(VideosComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe('videos infos', () => {

    beforeEach(() => {
      comp.videos$ = of(expectedVideos);
      fixture.detectChanges();

    })

    it('should display 3 videos', () => {
      expect(fixture.debugElement.queryAll(By.css('.video')).length).toBe(3)
    })

    it('first should have all the information', () => {
      expect(fixture.debugElement.query(By.css('[data-test="img-video"]'))).toBeTruthy()
      expect(fixture.debugElement.query(By.css('[data-test="title-video"]')).nativeElement.textContent).toBe('title 1')
      expect(fixture.debugElement.query(By.css('[data-test="channel-video"]')).nativeElement.textContent).toBe('Channel 1')
    })
  })
});
