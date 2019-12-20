import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  headerData: Head[] = [
    {
      link: "/home",
      name: "Home",
      selected: false
    },
    {
      link: "/about",
      name: "About",
      selected: true
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

  constructor() { }

  ngOnInit() {
  }

}
