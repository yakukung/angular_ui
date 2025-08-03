import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import Movies from '../../../assets/data/movies.json';

@Component({
  selector: 'app-detailmovie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailmovie.html',
  styleUrls: ['./detailmovie.scss']
})
export class Detailmovie implements OnInit {
  movie: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.paramMap.get('movie_id');
    if (movieId) {
      this.movie = Movies.find(m => m.moviesid === +movieId);
    }
  }
}
