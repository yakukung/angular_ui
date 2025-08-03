import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies';
import { Detailmovie } from './components/detailmovie/detailmovie';
import { PersonsComponent } from './components/persons/persons';

export const routes: Routes = [
      { path: '', component: MoviesComponent },
      { path: 'detailMovie/:movie_id', component: Detailmovie },
      { path: 'persons', component: PersonsComponent }
    ,];
