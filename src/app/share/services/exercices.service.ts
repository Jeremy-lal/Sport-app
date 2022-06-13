import { map, Observable, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  headers = {
    'X-RapidAPI-Key': '6d82a551c8msha89acca4206dd44p1134dejsn525ed885ce57',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

  url = 'https://exercisedb.p.rapidapi.com/exercises/'

  constructor(private http: HttpClient) { }

  getBodyParts(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'bodyPartList', { headers: this.headers })
  }

  getByBodyParts(bodypart: string): Observable<Exercise[]> {
    return this.http.get<Exercise[][]>(this.url + `bodyPart/${bodypart}`, { headers: this.headers }).pipe(
      map(el => el.flat()),
    )
  }

  getByName(name: string): Observable<Exercise[]> {
    return this.http.get<Exercise[][]>(this.url + `name/${name}`, { headers: this.headers }).pipe(
      map(el => el.flat())
    )
  }
}

