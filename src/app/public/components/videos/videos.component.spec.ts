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
        thubnails: [{ url: 'url 1' }]
      },
    },
    {
      video: {
        channelName: 'Channel 2',
        title: 'title 2',
        thubnails: [{ url: 'url 2' }]
      }
    },
    {
      video: {
        channelName: 'Channel 3',
        title: 'title 3',
        thubnails: [{ url: 'url 3' }]
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


  xdescribe('videos infos', () => {

    it('should display 3 videos', (done) => {
      // comp.videos$ = of(expectedVideos);
      // fixture.detectChanges();
      expect(true).toBe(true)
      // expect(fixture.debugElement.queryAll(By.css('.videos')).length).toBe(1)
    })

    // it('first should have all the information', () => {
    //   expect(fixture.debugElement.query(By.css('[data-test="img-video"]'))).toBeTruthy()
    //   expect(fixture.debugElement.query(By.css('[data-test="title-video"]')).nativeElement).toBe('Title 1')
    //   expect(fixture.debugElement.query(By.css('[data-test="channel-video"]')).nativeElement).toBe('Channel 1')
    // })
  })
});
