import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* Setting all the forms value input. The object properties must match with their input names and group names of the html.
       Maybe this is not the best approach in this scenario because if the users already enter some values and we call this method
       we will overide everything.
    */
    this.signupForm.setValue(
      {
        userData: {
          username: suggestedName,
          email: ''
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'male'
      }
    );
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }

}
