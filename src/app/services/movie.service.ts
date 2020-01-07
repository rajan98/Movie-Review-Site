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

  getMovie(id: string): Movie {
    return MOVIES.filter((movie) => (movie.id === id))[0];
  }

  addMovie(id: string, name: string, picSrc: string, rating: string, releaseDate: string, description: string) : void {
      let newMovie : Movie = {
            id: id,
            name: name,
            picSrc: picSrc,
            rating: rating,
            releaseDate: releaseDate,
            description: description,   
          }

    MOVIES.push(newMovie);
  }

  getLastMovieId(): string{
    return MOVIES[MOVIES.length-1].id;
  }

  removeMovie(id: string): void {
    const index = MOVIES.findIndex((x) => (x.id === id));
    MOVIES.splice(index, 1);
  }
}
