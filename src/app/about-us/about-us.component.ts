import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  userName: string;

  headerData: Head[];

  constructor( private route: ActivatedRoute) { }

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
