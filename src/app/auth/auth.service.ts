import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable()
export class AuthFirebase {   
    constructor(private rout:Router){} 
    token;
    signUpUser(email,password)
    {

         firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error => console.log(error)
        )
    }

    signInUser(email,password)
    {
        firebase.auth().signInWithEmailAndPassword(email,password).
        then(
            resp => {
                this.rout.navigate(['/recipes']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    respT => this.token =respT
                );
            }
        ).
        catch(
            error => console.log(error)
        )
    }

    getToken()
    {
        
         firebase.auth().currentUser.getIdToken()
        .then(
            resp => {this.token=resp;}
        )
        return this.token;
          
    }

    isAuthenticated()
    {
        return this.token!=null;
    }

    signOut()
    {
        firebase.auth().signOut();
        this.token=null;
        this.rout.navigate(['/sign-in'])
    }
}