import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import  Movies from '../../../assets/data/movies.json'
import { Router, RouterModule } from '@angular/router';
import { PersonsComponent } from "../persons/persons";

interface Movie {
  title: string;
  image: string;
  rating: number;
  story: string;
}

@Component({
  selector: 'app-movies',
  standalone: true,
 imports: [CommonModule, RouterModule, PersonsComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.scss']
})
export class MoviesComponent {
  movies = Movies;

  constructor(private router: Router) {}
  showdetailMovie(movie_id: any) {
    console.log("showdetailMovie");
    this.router.navigate(['/detailMovie', movie_id]);
  }
}
