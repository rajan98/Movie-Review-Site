import { Component, OnInit } from '@angular/core';
import { MOVIES, Movie } from '../shared/movieDetails';
import { Head } from '../shared/head';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  movie: Movie = MOVIES[0];
  headerData: Head[] = [
    {
      link: "/home",
      name: "Home",
      selected: true
    },
    {
      link: "/about",
      name: "About",
      selected: false
    },
    {
      link: "/contact",
      name: "Contact",
      selected: false
    },
    {
      link: "/login",
      name: "Logout",
      selected: false
    }
  ];

  constructor(private movieService: MovieService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.movie = this.movieService.getMovie(id);
  }

  goBack(): void{
    this.location.back();
  }

}
