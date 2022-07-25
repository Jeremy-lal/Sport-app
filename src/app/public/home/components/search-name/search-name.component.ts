import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent {
  @Output() searchParams = new EventEmitter()

  name: string = '';

  search() {
    this.searchParams.emit({
      type: 'name',
      param: this.name
    })
  }

}
