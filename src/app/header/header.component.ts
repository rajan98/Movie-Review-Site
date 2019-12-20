import { Component, OnInit, Input } from '@angular/core';
import { Head } from '../shared/head';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  headerData: Head[];

  constructor() { }

  ngOnInit() {
    console.log(this.headerData);
  }

}
