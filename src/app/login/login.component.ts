import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
//import { AngularFireAuth } from 'angularfire2/auth';
//import { Observable } from 'rxjs';
//import * as firebase from 'firebase/app';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { userInfo } from 'os';
//import {auth} from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User;
  constructor(private service:AuthService, private route:Router,
    private afAuth:AngularFireAuth) {
    
  }
 

  loginGoogle()
  {
    console.log("Login..");
    this.service.login();
    console.log('success');
    this.route.navigate['localhost:4200/view']
    
  }
  ngOnInit() {  

    this.service.getLoggedInUser()
    .subscribe ( user=>
      {
        this.user=user;

      });
    
  }

}
