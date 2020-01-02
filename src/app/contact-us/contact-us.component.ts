import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  userName: string;

  headerData: Head[];

  constructor(private route: ActivatedRoute) { }

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
