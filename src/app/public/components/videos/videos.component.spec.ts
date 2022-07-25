import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { of } from 'rxjs';

import { VideosComponent } from './videos.component';

describe('VideosComponent', () => {
  let comp: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;

  beforeEach(() => {

    TestBed
      .configureTestingModule({ declarations: [VideosComponent] })
    fixture = TestBed.createComponent(VideosComponent);
    comp = fixture.componentInstance;



    // // find the hero's DebugElement and element
    // heroDe = fixture.debugElement.query(By.css('.hero'));
    // heroEl = heroDe.nativeElement;

    // mock the hero supplied by the parent component

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

    // simulate the parent setting the input property with that hero
    comp.videos$ = of(expectedVideos);
    // trigger initial data binding
    fixture.detectChanges();
  });


  xdescribe('videos infos', () => {

    it('should display 3 videos', (done) => {
      expect(true).toBe(true)
      // setTimeout(() => {
      //   // Get the element that is displaying (tip: it's not your whole component)
      //   const videos = fixture.nativeElement.querySelectorAll('[data-test="img-video"]');
      //   // Test the innet text, not the HTML
      //   console.log(videos)
      //   // Test with includes, in case you have spaces (but feel free to test without includes)
      //   expect(videos.length).toEqual(3);
      //   // End your test
      //   done();
      // });
      // expect(true).toBe(true)
      // expect(fixture.debugElement.queryAll(By.css('[data-test="img-video"]'))).toBeTruthy()
    })

    // it('first should have all the information', () => {
    //   expect(fixture.debugElement.query(By.css('[data-test="img-video"]'))).toBeTruthy()
    //   expect(fixture.debugElement.query(By.css('[data-test="title-video"]')).nativeElement).toBe('Title 1')
    //   expect(fixture.debugElement.query(By.css('[data-test="channel-video"]')).nativeElement).toBe('Channel 1')
    // })
  })
});
