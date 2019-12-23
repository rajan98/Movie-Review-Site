import { Injectable } from '@angular/core';
import { Movie, MOVIES } from '../shared/movieDetails';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return MOVIES;
  }

  getMovie(id: string): Movie{
    return MOVIES.filter((movie) => (movie.id === id))[0];
  }
}
