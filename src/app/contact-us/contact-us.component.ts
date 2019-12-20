import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  headerData: Head[] = [
    {
      link: "/home",
      name: "Home",
      selected: false
    },
    {
      link: "/about",
      name: "About",
      selected: false
    },
    {
      link: "/contact",
      name: "Contact",
      selected: true
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
