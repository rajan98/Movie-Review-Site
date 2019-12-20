import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { MovieDetails, Movie } from '../shared/movieDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  movies: Movie[];

  constructor() {
    let md = new MovieDetails();
    this.movies = md.movies;
   }

  ngOnInit() {
  }

}
