import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthFirebase } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthFirebase,
    private actRouter:Router) { }

  ngOnInit() {
    this.auth.signOut();
  }
  

  onSignIn(f:NgForm)
  {
    console.log(f.value.email,f.value.password)
    this.auth.signInUser(f.value.email,f.value.password);
 //   this.actRouter.navigate("/recipes",{relativeTo:'active'})
  }
}
