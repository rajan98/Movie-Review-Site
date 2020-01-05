import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';
import { MovieService } from '../services/movie.service';

import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  headerData: Head[];

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.userName = this.route.snapshot.params['userName'];
    this.headerData = [
     {
      link: "/home/" + this.userName,
      name: "Home",
      selected: false
    },
    {
      link: "/about/" + this.userName,
      name: "About",
      selected: true
    },
    {
      link: "/contact/" + this.userName,
      name: "Contact",
      selected: false
    },
    {
      link: "/login",
      name: "Logout",
      selected: false
    }
  ];
  }

}
