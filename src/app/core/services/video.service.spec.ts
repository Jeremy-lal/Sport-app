import { VideoService } from './video.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from 'src/app/test-helper/async-helper';



describe('TestService', () => {
  let service: VideoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRelatedVideo', () => {

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new VideoService(httpClientSpy);
    });

    it('should return expected body parts (HttpClient called once)', (done: DoneFn) => {
      const expectedVideos: any = {
        contents: [
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
          {
            video: {
              channelName: 'Channel 4',
              title: 'title 4',
              thubnails: [{ url: 'url 4' }]
            }
          },
        ]
      };

      httpClientSpy.get.and.returnValue(asyncData(expectedVideos));

      service.getRelatedVideo('front lever').subscribe({
        next: videos => {
          expect(videos)
            .withContext('expected videos')
            .toEqual(expectedVideos.contents.slice(0, 3));
          done();
        },
        error: done.fail
      });
      expect(httpClientSpy.get.calls.count())
        .withContext('one call')
        .toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      service.getRelatedVideo('front lever').subscribe({
        next: videos => done.fail('expected an error, not videos'),
        error: error => {
          expect(error.error).toContain('test 404 error');
          done();
        }
      });
    });
  })

});
