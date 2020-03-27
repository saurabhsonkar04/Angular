import { Component, OnInit, ɵConsole, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthFirebase } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth:AuthFirebase) { }
  ngOnInit() {
  }

  onSignUp(form:NgForm)
  {
    console.log(form.value.email)
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signUpUser(email,password)
  }
}
