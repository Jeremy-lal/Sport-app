import { Exercise } from './../../../../share/models/exercise';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  @Input() results$!: Observable<Exercise[]>;

  constructor() { }

}
