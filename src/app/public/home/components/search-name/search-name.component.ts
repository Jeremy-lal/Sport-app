import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit {
  @Output() searchParams = new EventEmitter()

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.searchParams.emit({
      type: 'name',
      param: this.name
    })
  }

}
