import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Head } from '../shared/head';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loginChecker: number;
  loginButtonClick: boolean = false;
  loginSuccess: boolean = false;
  username: string;
  password: string;
  headerData: Head[] = [];

  loginDetail = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "udi",
      password: "idu"
    },
    {
      username: "tom",
      password: "mot",
    },
    {
      username: "raj",
      password: "jar"
    }
  ]

  constructor(public router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  loginFunction() {
    this.username= this.loginForm.value['username'];
    this.password= this.loginForm.value['password'];

    for (let i = 0; i < this.loginDetail.length; i++) {
      if (this.username == this.loginDetail[i].username && this.password == this.loginDetail[i].password) {
        this.loginSuccess = true;
        if (this.username == 'admin') {
          this.router.navigate(['admin']);
        }
        else {
          this.router.navigate(['home', this.username]);
        }
      }
    }
    if (!this.loginSuccess) {
      this.loginSuccess = false;
      console.log("Unsuccessful Login");
      this.loginButtonClick = true;
    }
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
}
}


