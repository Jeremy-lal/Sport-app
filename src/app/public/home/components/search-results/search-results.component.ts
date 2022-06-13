import { Exercise } from './../../../../share/models/exercise';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() results$!: Observable<Exercise[]>;
  exercisesToDisplay$!: Observable<Exercise[]>

  currentPage = 0;
  itemPerPage = 9;
  nbPage = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.results$) {
      this.changePage(0)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.results$) {
      this.changePage(this.currentPage)
    }
  }

  changePage(page: number) {
    this.currentPage = page
    const indexFirst = this.currentPage * this.itemPerPage
    this.exercisesToDisplay$ = this.results$.pipe(
      tap(el => {
        this.nbPage = el.length % this.itemPerPage
      }),
      map(el => el.slice(indexFirst, indexFirst + 9)),
    )
  }

}
