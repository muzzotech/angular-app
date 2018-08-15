import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../../../../shared/models/movies';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() movieDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    this.movieDelete.emit(this.movie.id);
  }

  onClickView() {
    window.open(this.movie.image_url);
  }

}
