import { Video } from './../../../share/models/video';
import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  @Input() videos$!: Observable<Video[]>
}
