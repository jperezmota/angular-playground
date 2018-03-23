import * as firebase from "firebase";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{

  token: string;

  constructor(private router: Router){}

  signupUser(email: string, password: string){
    // The method call return a promise, so we can catch any error using .catch()
    firebase.auth().createUserWithEmailAndPassword(email, password)
                   .catch(
                     error => console.log(error)
                   );
  }

  signinUser(email: string, password: string){
    // The method call return a promise, so we can use then to proccess the sucessful response .then()
    firebase.auth().signInWithEmailAndPassword(email, password)
                   .then(
                     response => {
                       this.router.navigate(['/']);
                       console.log(response);
                       firebase.auth().currentUser.getToken()
                                                  .then(
                                                    (token: string) => {this.token = token}
                                                  );


                     }
                   )
                   .catch(
                     error => {
                       console.log(error);
                     }
                   );
  }

  /*
    This method has as risk of returning a expired token because if its already expired and the getToken call havent finished
    we will be returning the expired one. We can follow another approach or just leave this one and implement some validation
    to the user.
  */
  getToken(){
    firebase.auth().currentUser.getToken()
                                      .then(
                                        (token: string) => {this.token = token}
                                      );

    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
}
