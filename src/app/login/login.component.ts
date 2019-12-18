import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginChecker: number;
  loginButtonClick: boolean = false;
  loginSuccess: boolean = false;
  username: string;
  password: string;

  loginDetail = [
    {
      username : "admin",
      password :  "admin"
    },
    {
      username : "user",
      password : "user"
    },
    {
      username : "tom",
      password : "mot",
    },
    {
      username : "Raj",
      password : "jaR"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  loginFunction(){
    
    for(let i=0;i<this.loginDetail.length; i++){
      if(this.username == this.loginDetail[i].username && this.password == this.loginDetail[i].password){
        this.loginSuccess = true;
        if(this.username == 'admin'){
          console.log("Admin successfully logged in");
        }
        else{
          console.log( this.username + " Successfully logged in");
        }
      }
    }
    if(!this.loginSuccess){
      this.loginSuccess = false;
      console.log("Unsuccessful Login");
      this.loginButtonClick = true;
    }
  }

}
