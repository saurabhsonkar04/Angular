import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  ngOnInit(): void {
    firebase.initializeApp({
     apiKey : "AIzaSyD-gVd_uwZItvQnYyKou9YVxf0Cpn49umI",
     authDomain : "https://shopping-cart-9e5e2.firebaseio.com/"

    });
 }

}
