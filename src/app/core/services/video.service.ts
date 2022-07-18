import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

  headers = {
    'X-RapidAPI-Key': environment.api_key,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

  constructor(private http: HttpClient) { }

  getRelatedVideo(name: string) {
    return this.http.get<any>(`${this.youtubeUrl}/search?query=${name} exercise`, { headers: this.headers }).pipe(
      map(el => el.contents.slice(0, 3)),
    )
  }
}
