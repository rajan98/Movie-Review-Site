import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { MovieDetails, Movie } from '../shared/movieDetails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movies: Movie[];

  headerData: Head[] = [
    {
      link: "/admin",
      name: "Admin Home",
      selected: true
    },
    {
      link: "/login",
      name: "Logout",
      selected: false
    }
  ];

  constructor() {
    let md = new MovieDetails();
    this.movies = md.movies;
   }

  ngOnInit() {
  }

}
