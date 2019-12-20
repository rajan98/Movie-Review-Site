import { Component, OnInit } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
